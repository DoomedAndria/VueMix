import { createStore } from "vuex";
import currencyPlugin from "./plugins/currencyPlugin";
import playlistPlugin from "./plugins/playlistPlugin";
import youtubePlugin from "./plugins/youtubePlugin";

export default createStore({
	plugins: [currencyPlugin, playlistPlugin, youtubePlugin],
});
