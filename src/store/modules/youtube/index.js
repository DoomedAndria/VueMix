import axios from "axios";

export default {
	namespaced: true,
	state: {
		videos: null,
	},
	actions: {
		fetchVideos({ commit }) {
			axios
				.get(import.meta.env.VITE_YOUTUBE_API_URL)
				.then((result) => {
					console.log(result.data);
					commit("updateVideos", result.data);
				})
				.catch(console.error);
		},
	},
    mutations:{
        updateVideos(state,videos){
            state.videos = videos
        }
    },
    getters:{
        getVideos(state){
            return state.videos
        }
    }
};
