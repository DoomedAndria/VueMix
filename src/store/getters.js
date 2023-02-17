export default {
	getPlaylist: (state) => {
		return state.playlist;
	},
	getFavs: (state) => {
		return state.favs;
	},
	getItemByIdP: (state) => (id) => {
		return state.playlist.find((e) => e.id == id);
	},
	getItemByIdF: (state) => (id) => {
		return state.favs.find((e) => e.id == id);
	},
};
