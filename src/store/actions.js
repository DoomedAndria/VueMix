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
	fetchCurrencies({ commit }) {
		axios
			.get(import.meta.env.VITE_CURRENCIES_API_URL)
			.then((result) => {
				commit("updateCurrencies", result.data[0].currencies);
				console.log("response data ", result.data[0].currencies);
			})
			.catch(console.error);
	},
};
