'use strict';

const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const r = require('rethinkdb');
const changefeedSocketEvents = require('./socket-events.js');
const PORT = 9000;

app.use(express.static('public'));
app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/index.html`));
});

r.connect({
    user: 'admin',
    db: 'inventory'
})
.then((connection) => {
    io.on('connection', (socket) => {
        socket.on('item:insert', (item) => {
            r.table('items').insert(item).run(connection);
        });
        
        socket.on('item:update', (item) => {
            let updateItemID = item.id;
            delete item.id;
            r.table('items').get(updateItemID).update(item).run(connection);
        });
        
        socket.on('item:delete', (item) => {
            let deleteItemID = item.id;
            delete item.id;
            r.table('items').get(deleteItemID).delete().run(connection);
        });
        
        socket.on('user:insert', (user) => {
            r.table('users').insert(user).run(connection);
        });
        
        socket.on('user:update', (user) => {
            let updateUserID = user.id;
            delete user.id;
            r.table('users').get(updateUserID).update(user).run(connection);
        });
        
        socket.on('user:delete', (user) => {
            let deleteUserID = user.id;
            delete user.id;
            r.table('users').get(deleteUserID).delete().run(connection);
        });
        
        r.table('items').changes({ includeInitial: true, squash: true }).run(connection)
            .then(changefeedSocketEvents(socket, 'item'));
        r.table('users').changes({ includeInitial: true, squash: true }).run(connection)
            .then(changefeedSocketEvents(socket, 'user'));
    });
    server.listen(PORT);
})
.error((error) => {
    console.log('Error connecting to database');
    console.log(error);
});