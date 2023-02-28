import axios from "axios";

export default {
    namespaced: true,
    state: {
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
                name: "ყველა"
            },
            {
                id: 1,
                category: "Film and Animation",
                name: "ფილმი და ანიმაცია",
            },
            {
                id: 2,
                category: "Autos and Vehicles",
                name: "მანქანები",
            },
            {
                id: 3,
                category: "Music",
                name: "მუსიკა",
            },
            {
                id: 4,
                category: "Pets & Animals",
                name: "შინაური ცხოველები",
            },
            {
                id: 5,
                category: "Sports",
                name: "სპორტი",
            },
            {
                id: 6,
                category: "Travel and Events",
                name: "მოგზაურობა და წვეულებები",
            },
            {
                id: 7,
                category: "Gaming",
                name: "თამაშები",
            },
            {
                id: 8,
                category: "People and Blogs",
                name: "ხალხი და ბლოგები",
            }
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
            console.log(id)
            state.categoryId = id;
        }
    },
    getters: {
        getVideos(state) {
            const cId = state.categoryId;
            return (cId === 0 ? state.videos : state.videos.filter((c) => c.categoryId === cId)).filter((c) =>
                c.name.toLowerCase().includes(state.search.toLowerCase()))
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
    },
};
