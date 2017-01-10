"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// socket-events.js
// imported into server.js

var changeFeed = function changeFeed(socket, entityName) {
    return function (rows) {
        rows.each(function (err, row) {
            if (err) {
                return console.log(err);
            } else if (row.new_val && !row.old_val) {
                socket.emit("inventory:" + entityName + ":insert", row.new_val);
            } else if (row.new_val && row.old_val) {
                socket.emit("inventory:" + entityName + ":update", row.new_val);
            } else if (row.old_val && !row.new_val) {
                socket.emit("inventory:" + entityName + ":delete", { id: row.old_val.id });
            }
        });
    };
};

exports.default = changeFeed;