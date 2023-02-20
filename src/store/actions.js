import axios from "axios";
export default {
	fetchPlaylist({ commit }) {
		axios
			.get(import.meta.env.VITE_PLAYLIST_API_URL)
			.then((result) => {
				commit("updatePlaylist", result.data);
			})
			.catch(console.error);
	},
	
};
