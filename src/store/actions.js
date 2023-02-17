import axios from "axios";
export default {
	fetchPlaylist({ commit }) {
		axios
			.get(import.meta.env.VITE_API_URL)
			.then((result) => {
				commit("updatePlaylist", result.data);
				console.log("response data ", result.data);
			})
			.catch(console.error);
	},
};
