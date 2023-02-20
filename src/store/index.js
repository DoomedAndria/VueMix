import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

import { createStore } from "vuex";
import currencyPlugin from "./plugins/currencyPlugin";

export default createStore({
	plugins:[currencyPlugin],
	state: {
		playlist: null,
		favs: [],
	},
	mutations,
	actions,
	getters,
});
