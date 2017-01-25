'use strict';

const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const r = require('rethinkdb');
const changefeedSocketEvents = require('./socket-events.js');
const PORT = 8080;

app.use(express.static('public'));
app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/index.html`));
});

r.connect({
    user: 'admin',
    db: 'inventory'
})
.then((connection) => {
    const itemsList = r.table('items');
    io.on('connection', (socket) => {
        socket.on('item:insert', (item) => {
            itemsList.insert(item).run(connection);
        });
        
        socket.on('item:sold', (item) => {
            let soldItemID = item.id;
            delete item.id;
            itemsList.get(soldItemID).update(item).run(connection);
        });
        
        socket.on('item:replenished', (item) => {
            let replenishedItemID = item.id;
            delete item.id;
            itemsList.get(replenishedItemID).update(item).run(connection);
        });
        
        socket.on('item:delete', (item) => {
            let deleteItemID = item.id;
            delete item.id;
            itemsList.get(deleteItemID).delete().run(connection);
        });
        
        itemsList.changes({ includeInitial: true, squash: true }).run(connection)
            .then(changefeedSocketEvents(socket, 'item'));
    });
    server.listen(PORT);
})
.error((error) => {
    console.log('Error connecting to database');
    console.log(error);
});