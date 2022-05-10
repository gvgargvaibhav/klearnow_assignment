const initialState = {
    users: []
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case "DELETE_USER":
            return {
                users: [...state.users.filter(user => user.id !== action.payload)]
            };
        case "UPDATE_USER":
           const indexU =  state.users.findIndex(user => user.id === action.payload.id)
          
          return {
            users: state.users.map(item => {
                return item.id === action.payload.id ? action.payload : item;
            })
                
            };
        default:
            return state;
    }
};

export default userReducer;