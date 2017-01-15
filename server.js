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
    const itemsList = r.table('items'),
        usersList = r.table('users');
    io.on('connection', (socket) => {
        socket.on('item:insert', (item) => {
            itemsList.insert(item).run(err, connection);
        });
        
        socket.on('item:update', (item) => {
            let updateItemID = item.id;
            delete item.id;
            itemsList.get(updateItemID).update(item).run(err, connection);
        });
        
        socket.on('item:delete', (item) => {
            let deleteItemID = item.id;
            delete item.id;
            itemsList.get(deleteItemID).delete().run(err, connection);
        });
        
        socket.on('user:insert', (user) => {
            usersList.insert(user).run(err, connection);
        });
        
        socket.on('user:update', (user) => {
            let updateUserID = user.id;
            delete user.id;
            usersList.get(updateUserID).update(user).run(err, connection);
        });
        
        socket.on('user:delete', (user) => {
            let deleteUserID = user.id;
            delete user.id;
            usersList.get(deleteUserID).delete().run(err, connection);
        });
        
        itemsList.changes({ includeInitial: true, squash: true }).run(connection)
            .then(changefeedSocketEvents(socket, 'item'));
        usersList.changes({ includeInitial: true, squash: true }).run(connection)
            .then(changefeedSocketEvents(socket, 'user'));
    });
    server.listen(PORT);
})
.error((error) => {
    console.log('Error connecting to database');
    console.log(error);
});