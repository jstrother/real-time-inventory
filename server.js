'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _rethinkdb = require('rethinkdb');

var r = _interopRequireWildcard(_rethinkdb);

var _socketEvents = require('./socket-events.js');

var changefeedSocketEvents = _interopRequireWildcard(_socketEvents);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var server = (0, _http.Server)(app);
var io = require('socket.io')(server);
var PORT = 9000;

app.use(_express2.default.static('public'));
app.get('*', function (req, res) {
    res.sendFile(_path2.default.join(__dirname + '/public/index.html'));
});

if (!r.db('inventory')) {
    r.dbCreate('inventory');
}

r.connect({
    user: 'admin',
    db: 'inventory'
}).then(function (connection) {
    io.on('connection', function (socket) {
        socket.on('item:insert', function (item) {
            r.table('items').insert(item).run(connection);
        });

        socket.on('item:update', function (item) {
            var updateItemID = item.id;
            delete item.id;
            r.table('items').get(updateItemID).update(item).run(connection);
        });

        socket.on('item:delete', function (item) {
            var deleteItemID = item.id;
            delete item.id;
            r.table('items').get(deleteItemID).delete().run(connection);
        });

        socket.on('user:insert', function (user) {
            r.table('users').insert(user).run(connection);
        });

        socket.on('user:update', function (user) {
            var updateUserID = user.id;
            delete user.id;
            r.table('users').get(updateUserID).update(user).run(connection);
        });

        socket.on('user:delete', function (user) {
            var deleteUserID = user.id;
            delete user.id;
            r.table('users').get(deleteUserID).delete().run(connection);
        });

        r.table('items').changes({ includeInitial: true, squash: true }).run(connection).then(changefeedSocketEvents(socket, 'item'));
        r.table('users').changes({ includeInitial: true, squash: true }).run(connection).then(changefeedSocketEvents(socket, 'user'));
    });
    server.listen(PORT);
}).error(function (error) {
    console.log('Error connecting to database');
    console.log(error);
});
