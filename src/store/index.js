import { createStore } from "vuex";
import currencyPlugin from "./plugins/currencyPlugin";
import playlistPlugin from "./plugins/playlistPlugin"

export default createStore({
	plugins:[currencyPlugin,playlistPlugin],
});
