'use strict';

import path from 'path';
import express from 'express';
import { Server } from 'http';
import * as r from 'rethinkdb';
import * as changefeedSocketEvents from './socket-events.js';

const app = express();
const server = Server(app);
const io = require('socket.io')(server);
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
        socket.on('inventory:item:insert', (item) => {
            r.table('items').insert(item).run(connection);
        });
        
        socket.on('inventory:item:update', (item) => {
            let updateItemID = item.id;
            delete item.id;
            r.table('items').get(updateItemID).update(item).run(connection);
        });
        
        socket.on('inventory:item:delete', (item) => {
            let deleteItemID = item.id;
            delete item.id;
            r.table('items').get(deleteItemID).delete().run(connection);
        });
        
        socket.on('inventory:user:insert', (user) => {
            r.table('users').insert(user).run(connection);
        });
        
        socket.on('inventory:user:update', (user) => {
            let updateUserID = user.id;
            delete user.id;
            r.table('users').get(updateUserID).update(user).run(connection);
        });
        
        socket.on('inventory:user:delete', (user) => {
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