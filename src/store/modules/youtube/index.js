import axios from "axios";

export default {
    namespaced: true,
    state: {
        profile: {
            name: "Andro",
            surname: "Bibiashvili",
            email: "bibiashviliandria@gmail.com",
            image:
                "https://th.bing.com/th/id/OIP.erIu5ZBnnpwpJ0RkDTDVkAHaHj?pid=ImgDet&rs=1",
        },
        videos: null,
        api_videos: null,
        search: "",
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
        categories: [
            {
                id: 0,
                category: "All",
                name: "All",
            },
            {
                id: 1,
                category: "Film and Animation",
                name: "Film and Animation",
            },
            {
                id: 2,
                category: "Autos and Vehicles",
                name: "Autos and Vehicles",
            },
            {
                id: 3,
                category: "Music",
                name: "Music",
            },
            {
                id: 4,
                category: "Pets & Animals",
                name: "Pets & Animals",
            },
            {
                id: 5,
                category: "Sports",
                name: "Sports",
            },
            {
                id: 6,
                category: "Travel and Events",
                name: "Travel and Events",
            },
            {
                id: 7,
                category: "Gaming",
                name: "Gaming",
            },
            {
                id: 8,
                category: "People and Blogs",
                name: "People and Blogs",
            },
        ],
        categoryId: 0,
    },
    actions: {
        fetchVideos({commit}) {
            axios
                .get(import.meta.env.VITE_YOUTUBE_API_URL)
                .then((result) => {
                    commit("updateVideos", result.data);
                })
                .catch(console.error);
        },
        fetchApiVideos({commit}) {
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
        updateSearch(state, search) {
            state.search = search;
        },
        updateCategoryId(state, id) {
            state.categoryId = id;
        },
        updateProfile(state, profile) {
            state.profile = profile
        }
    },
    getters: {
        getVideos(state) {
            const cId = state.categoryId;
            return (
                cId === 0
                    ? state.videos
                    : state.videos.filter((c) => c.categoryId === cId)
            ).filter((c) =>
                c.name.toLowerCase().includes(state.search.toLowerCase())
            );
        },
        getSidebarShrunk(state) {
            return state.sidebarShrunk;
        },
        getSidebarItems(state) {
            return state.sidebarItems;
        },
        getApiVideos(state) {
            return state.api_videos;
        },
        getVideoById(state) {
            return (id) => state.videos.find((c) => c.video_id == id);
        },
        getSearch(state) {
            return state.search;
        },
        getCategories(state) {
            return state.categories;
        },
        getProfile(state) {
            return state.profile;
        },
    },
};
