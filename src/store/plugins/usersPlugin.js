import users from "../modules/users";

export default (store) => {
    store.registerModule("users", users);
};
