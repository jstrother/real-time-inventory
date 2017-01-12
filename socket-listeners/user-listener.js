// ./socket-listeners/user-listener.js
// imported into index.jsx

import io from 'socket.io-client/dist/socket.io';
const socket = io.connect('/');

const UserSocketListener = (store) => {
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

export default UserSocketListener;