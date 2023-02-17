import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

import { createStore } from "vuex";

export default createStore({
	state: {
		playlist: null,
		favs: [],
	},
	mutations,
	actions,
	getters,
});
