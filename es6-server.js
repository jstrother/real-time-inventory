'use strict';

import path from 'path';
import express from 'express';
import { Server } from 'http';
import * as r from 'rethinkdb';

const app = express();
const server = Server(app);
const io = require('socket.io')(server);
const PORT = 9000;

app.use(express.static('public'));
app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname} /public/index.html`));
});

r.connect({
    user: 'admin',
    db: 'inventory'
})
.then((connection) => {
    io.on('connection', (socket) => {
        socket.on('inventory:item:insert', () => {
            
        });
        
        socket.on('inventory:item:update', () => {
            
        });
        
        socket.on('inventory:item:delete', () => {
            
        });
        
        socket.on('inventory:user:insert', () => {
            
        });
        
        socket.on('inventory:user:update', () => {
            
        });
        
        socket.on('inventory:user:delete', () => {
            
        });
    });
});