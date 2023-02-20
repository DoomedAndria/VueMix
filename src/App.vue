<script setup>
import Navbar from "./components/Navbar.vue";
import { useStore } from "vuex";
import { onMounted } from "vue";

const store = useStore();

onMounted(() => {
	store.dispatch("fetchPlaylist");
	store.dispatch("currencies/fetchCurrencies");
});
</script>

<template>
	<div>
		<header>
			<Navbar />
		</header>
		<main>
			<router-view />
		</main>
	</div>
</template>
