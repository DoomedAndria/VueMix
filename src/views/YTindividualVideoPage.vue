<script setup>
import YTheaderLayout from "../layouts/YTheaderLayout.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const store = useStore();
const video = store.getters["youtube/getVideoById"](route.params.id)

onMounted(() => {
	console.log(store.getters["youtube/getVideoById"](route.params.id));
});
const src = `https://www.youtube.com/embed/${route.params.id}?autoplay=1&mute=1&enablejsapi=1`;
</script>

<template>
	<YTheaderLayout>
		<iframe width="892" height="502" :src="src" frameborder="0" allowfullscreen> </iframe>
		<h1 style="font-size: 30px;font-weight: 900;">{{ video.name }}</h1>
		<h3 style="font-size: 20px;">views: {{ video.views }}</h3>
		<h3 style="font-size: 20px;">date: {{ video.date_uploaded }}</h3>
	</YTheaderLayout>
</template>

<style scoped></style>
