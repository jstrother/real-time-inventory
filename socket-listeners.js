// ./socket-listeners/inventory-listener.js
// imported into index.jsx

import io from 'socket.io-client';
const socket = io.connect('/');

export const ItemSocketListener = (store) => {
    socket.on('item:insert', (item) => {
        store.dispatch({
            type: 'item:insert',
            item
        });
    });
    
    socket.on('item:sold', (item) => {
        store.dispatch({
            type: 'item:sold',
            item
        });
    });

    socket.on('item:replenished', (item) => {
        store.dispatch({
            type: 'item:replenished',
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

export const UserSocketListener = (store) => {
    socket.on('user:insert', (user) => {
        store.dispatch({
            type: 'user:insert',
            user
        });
    });

    socket.on('user:update', (user) => {
        store.dispatch({
            type: 'user:update',
            user
        });
    });

    socket.on('user:delete', (user) => {
        store.dispatch({
            type: 'user:delete',
            user
        });
    });
};