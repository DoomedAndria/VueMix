import axios from "axios";

export default {
	namespaced: true,
	state: {
		currencies: null,
	},
	actions: {
		fetchCurrencies({ commit }) {
			axios
				.get(import.meta.env.VITE_CURRENCIES_API_URL)
				.then((result) => {
					commit("updateCurrencies", result.data[0].currencies);
					console.log("response data ", result.data[0].currencies);
				})
				.catch(console.error);
		},
	},
	getters: {
		getCurrencies(state) {
			return state.currencies;
		},
	},
	mutations: {
		updateCurrencies(state, currencies) {
			state.currencies = currencies;
		},
	},
};
