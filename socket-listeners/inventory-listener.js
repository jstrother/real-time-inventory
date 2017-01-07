// ./socket-listeners/inventory-listener.js
// imported into index.jsx

import io from 'socket.io/node_modules/socket.io-client';
const socket = io.connect('/');

export default (store) => {
    socket.on('inventory:item:insert', (item) => {
        store.dispatch({
            type: 'inventory:item:insert',
            item
        });
    });
    
    socket.on('inventory:item:update', (item) => {
        store.dispatch({
            type: 'inventory:item:update',
            item
        });
    });
    
    socket.on('inventory:item:delete', (item) => {
        store.dispatch({
            type: 'inventory:item:delete',
            item
        });
    });
};