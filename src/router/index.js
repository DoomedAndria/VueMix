import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "Home",
			component: () => import("../views/Home.vue"),
		},
		{
			path: "/playlist",
			name: "Playlist",
			component: () => import("../views/Playlist.vue"),
		},
		{
			path: "/currencies",
			name: "Currencies",
			component: () => import("../views/Currencies.vue"),
		},
		{
			path: "/favs",
			name: "Favs",
			component: () => import("../views/Favs.vue"),
		},
		{
			path: "/youtube",
			name: "Youtube",
			component: () => import("../views/YouTube.vue"),
			children: [
				
			],
		},
		{
			path: "/youtube/settings",
			name: "Settings",
			component: () => import("../views/YTsettings.vue"),
		},
		{
			path: "/youtube/settings/editProfile",
			name: "Edit",
			component: () => import("../views/YTeditProfile.vue"),
		},
		{
			path: "/youtube/:id",
			name: "Ind",
			component: () => import("../views/YTindividualVideoPage.vue"),
		},
	],
});
