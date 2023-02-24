<script setup>
import Navbar from "./components/Navbar.vue";
import { useStore } from "vuex";
import { onMounted } from "vue";

const store = useStore();

onMounted(() => {
	store.dispatch("playlist/fetchPlaylist");
	store.dispatch("currencies/fetchCurrencies");
	store.dispatch("youtube/fetchVideos");
});
</script>

<template>
	<router-view />
</template>
