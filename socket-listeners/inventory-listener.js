// ./socket-listeners/inventory-listener.js
// imported into index.jsx

import io from 'socket.io-client';
const socket = io.connect('/');

const InventorySocketListener = (store) => {
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

export default InventorySocketListener;