// ./socket-listeners/inventory-listener.js
// imported into index.jsx

import io from 'socket.io/node_modules/socket.io-client';
const socket = io.connect('/');

export default (store) => {
    socket.on('item:insert', (item) => {
        store.dispatch({
            type: 'item:insert',
            item
        });
    });
    
    socket.on('item:update', (item) => {
        store.dispatch({
            type: 'item:update',
            item
        });
    });
    
    socket.on('item:delete', (item) => {
        store.dispatch({
            type: 'item:delete',
            item
        });
    });
};