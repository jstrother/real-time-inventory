// imported into reducers.js

const inventoryReducer = (state = [], action) => {
    const inventoryIndex = () => {
        return state.findIndex((thisItem) => {
            return thisItem && thisItem.id === action.item.id;
        });
    };
    
    switch(action.type) {
        case 'inventory:item:insert':
            return inventoryIndex() < 0 ? [...state, action.item] : state;
            
        case 'inventory:item:update':
            let updateIndex = inventoryIndex();
            if (updateIndex > -1) {
                let updatedItem = Object.assign({}, state[updateIndex], action.item);
                return [...state.slice(0, updateIndex), updatedItem, ...state.slice(updateIndex + 1)];
            }
            else {
                return state;
            }
            
        case 'inventory:item:delete':
            let deleteIndex = inventoryIndex();
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

export default inventoryReducer;