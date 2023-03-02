export default {
    state() {
        return {
            users: [
                {
                    id: 0,
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: ""
                }
            ],
            user: null

        }
    },
    mutations: {
        REGISTER(state, user) {
            state.user.push(user)
        },
        AUTHENTICATION(state, user) {
            const realUser = state.users.find(u => u.email === user.email)
            if (realUser.password === user.password) {
                state.user = user
            }
        },
        UPDATE_USER_INFO(state, user){
            const _user = state.users.find(u=> u.id === user.id)
            _user.id = user.id
            _user.firstName = user.firstName
            _user.lastName = user.lastName
            _user.email = user.email
            _user.password = user.password
        }

    },
    getters: {},
    actions: {
        registerUser({commit},user){
            commit('REGISTER',user)
            commit('AUTHENTICATION',user)
        },

    }
}