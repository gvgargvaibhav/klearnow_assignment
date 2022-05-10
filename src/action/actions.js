
export const addUser = text => ({
    type: "ADD_USER",
    payload: text
});
export const deleteUser = user => ({
    type: "DELETE_USER",
    payload: user
});
export const updateUser = text => ({
    type: "UPDATE_USER",
    payload: text
});