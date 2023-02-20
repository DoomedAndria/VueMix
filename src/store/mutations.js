export default {
	updatePlaylist(state, playlist) {
		state.playlist = playlist;
	},

	removeItemFromPlaylist(state, id) {
		var index = state.playlist.indexOf(state.playlist.find((e) => e.id == id));
		state.playlist.splice(index, 1);
	},
	removeItemFromFavs(state, id) {
		var index = state.favs.indexOf(state.favs.find((e) => e.id == id));
		state.favs.splice(index, 1);
	},

	addItemToFavs(state, obj) {
		state.favs.push(obj);
	},
	addItemToPlaylist(state, obj) {
		state.playlist.push(obj);
	},

};
