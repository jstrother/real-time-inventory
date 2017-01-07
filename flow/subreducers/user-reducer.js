// imported into reducers.js

const userReducer = (state = [], action) => {
    const userIndex = () => {
        return state.findIndex((thisItem) => {
            return thisItem && thisItem.id === action.item.id;
        });
    };
    
    switch(action.type) {
        case 'user:insert':
            return userIndex() < 0 ? [...state, action.item] : state;
            
        case 'user:update':
            let updateIndex = userIndex();
            if (updateIndex > -1) {
                let updatedUser = Object.assign({}, state[updateIndex], action.user);
                return [...state.slice(0, updateIndex), updatedUser, ...state.slice(updateIndex + 1)];
            }
            else {
                return state;
            }
            
        case 'user:delete':
            let deleteIndex = userIndex();
            if (deleteIndex > -1) {
                return [...state.slice(0, deleteIndex), ...state.slice(deleteIndex + 1)];
            }
            else {
                return state;
            }
            
        default:
            return state;
    }
};

export default userReducer;;