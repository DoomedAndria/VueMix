import axios from "axios";

export default {
    namespaced: true,
    state() {
        return {
            users: [],
            user: null

        }
    },
    mutations: {
        updateUsers(state, users) {
            state.users = users
        },
        REGISTER(state, user) {
            state.user.push(user)
        },
        AUTHENTICATION(state, user) {
            const realUser = state.users.find(u => u.email === user.email)
            if (realUser.password === user.password) {
                state.user = user
            }
        },
        UPDATE_USER_INFO(state, user) {
            const _user = state.users.find(u => u.id === user.id)
            _user.id = user.id
            _user.firstName = user.firstName
            _user.lastName = user.lastName
            _user.email = user.email
            _user.password = user.password
        }

    },
    getters: {
        getUsers(state) {
            return state.users
        },
        getUserById(state) {
            return (id) => {
                return state.users.find(u => u.id == id)
            }
        }
    },
    actions: {
        fetchUsers({commit}) {
            axios
                .get(import.meta.env.VITE_USERS_API)
                .then((result) => {
                    commit("updateUsers", result.data.data);
                })
                .catch(console.error);
        },
        registerUser({commit}, user) {
            commit('REGISTER', user)
            commit('AUTHENTICATION', user)
        },

    }
}