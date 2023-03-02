import axios from "axios";

export default {
    namespaced: true,
    state: {
        playlist: null,
        favs: [],
    },
    actions: {
        fetchPlaylist({commit}) {
            axios
                .get(import.meta.env.VITE_PLAYLIST_API_URL)
                .then((result) => {
                    commit("updatePlaylist", result.data);
                })
                .catch(console.error);
        },
    },
    mutations: {
        updatePlaylist(state, playlist) {
            state.playlist = playlist;
        },

        removeItemFromPlaylist(state, id) {
            const index = state.playlist.indexOf(
                state.playlist.find((e) => e.id == id)
            );
            state.playlist.splice(index, 1);
        },
        removeItemFromFavs(state, id) {
            const index = state.favs.indexOf(state.favs.find((e) => e.id == id));
            state.favs.splice(index, 1);
        },

        addItemToFavs(state, obj) {
            state.favs.push(obj);
        },
        addItemToPlaylist(state, obj) {
            state.playlist.push(obj);
        },
    },
    getters: {
        getPlaylist(state) {
            return state.playlist;
        },
        getFavs(state) {
            return state.favs;
        },
        getItemByIdP(state) {
            return (id) => state.playlist.find((e) => e.id == id);
        },
        getItemByIdF(state) {
            return (id) => state.favs.find((e) => e.id == id);
        },
    },
};
