import axios from "axios";

export default {
	namespaced: true,
	state: {
		videos: null,
		sidebarShrunk: false,
		sidebarItems: [
			{
				name: "Home",
				icon: "src\\assets\\icons\\home.png",
			},
			{
				name: "Shorts",
				icon: "src\\assets\\icons\\shorts.png",
			},
			{
				name: "Subscriptions",
				icon: "src\\assets\\icons\\subscriptions.png",
			},
			{
				name: "Library",
				icon: "src\\assets\\icons\\library.png",
			},
		],
	},
	actions: {
		fetchVideos({ commit }) {
			axios
				.get(import.meta.env.VITE_YOUTUBE_API_URL)
				.then((result) => {
					commit("updateVideos", result.data);
				})
				.catch(console.error);
		},
	},
	mutations: {
		updateVideos(state, videos) {
			state.videos = videos;
		},
		toggleSidebarShrunk(state) {
			state.sidebarShrunk = !state.sidebarShrunk;
		},
	},
	getters: {
		getVideos(state) {
			return state.videos;
		},
		getSidebarShrunk(state) {
			return state.sidebarShrunk;
		},
		getSidebarItems(state) {
			return state.sidebarItems;
		},
	},
};
