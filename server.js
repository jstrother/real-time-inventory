'use strict';

const express = require('express');
const app = express();
const server = require('http').Server(app);
const path = require('path');
const io = require('socket.io')(server);
const r = require('rethinkdb');
const PORT = 9000;

app.use(express.static('public'));
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

r.connect({
    user: 'admin',
    db: 'inventory'
})
.then(function(connection) {
    io.on('connection', function(socket){
        /*
        emits for inventory changes:
            -inventory:item:add
            -inventory:item:delete
            -inventory:item:update
            -user:add
            -user:delete
            -user:update
        */
        socket.on('', function() {
            
        })
    });
});