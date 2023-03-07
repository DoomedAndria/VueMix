import {createRouter, createWebHistory, RouterView} from "vue-router";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import("../views/Home.vue"),
            children: []
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
            path: "/users",
            component: () => RouterView,
            children: [
                {
                    path: "",
                    name: "Dashboard",
                    component: () => import("../views/Dashboard.vue")
                },
                {
                    path: ":id",
                    name: "User",
                    component: () => import("../views/User.vue")
                }

            ]
        },
        {
            path: "/favs",
            name: "Favs",
            component: () => import("../views/Favs.vue"),
        },
        {
            path: "/youtube",
            component: () => RouterView,
            children: [
                {
                    path: "",
                    name: "youtube",
                    component: () => import("../views/YouTube.vue"),
                },
                {
                    path: ":id",
                    name: "Ind",
                    component: () => import("../views/YTindividualVideoPage.vue"),
                },
                {
                    path: "settings",
                    component: () => RouterView,
                    children: [
                        {
                            path: "",
                            name: "Settings",
                            component: () => import("../views/YTsettings.vue"),
                        },
                        {
                            path: "editProfile",
                            name: "Edit",
                            component: () => import("../views/YTeditProfile.vue"),
                        },
                    ]
                }
            ],
        },


    ],
});
