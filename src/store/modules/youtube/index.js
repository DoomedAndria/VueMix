import axios from "axios";

export default {
	namespaced: true,
	state: {
		videos: null,
		api_videos: null,
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
		fetchApiVideos({ commit }) {
			axios
				.get(
					"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=120&regionCode=US&key=AIzaSyCWjReqFeZbbopqMtApZuUzpnz0_D8F9AE"
				)
				.then((result) => {
					commit("updateApiVideos", result.data.items);
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
		updateApiVideos(state, api_videos) {
			state.api_videos = api_videos;
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
		getApiVideos(state){
			return state.api_videos
		}
	},
};
