// ./socket-listeners/user-listener.js
// imported into index.jsx

import io from 'socket.io-client';
const socket = io.connect('/');

const UserSocketListeners = (store) => {
    socket.on('user:insert', (item) => {
        store.dispatch({
            type: 'user:insert',
            item
        });
    });
    
    socket.on('user:update', (item) => {
        store.dispatch({
            type: 'user:update',
            item
        });
    });
    
    socket.on('user:delete', (item) => {
        store.dispatch({
            type: 'user:delete',
            item
        });
    });
};

export default UserSocketListeners;