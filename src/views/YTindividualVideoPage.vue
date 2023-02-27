<script setup>
import YTheaderLayout from "../layouts/YTheaderLayout.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const store = useStore();

onMounted(() => {
	console.log(store.getters["youtube/getVideoById"](route.params.id));
});
const src = `https://www.youtube.com/embed/${route.params.id}`;
</script>

<template>
	<YTheaderLayout>
		<iframe width="892" height="502" :src="src"> </iframe>
		<span>{{ store.getters["youtube/getVideoById"](route.params.id) }}</span>
	</YTheaderLayout>
</template>

<style scoped></style>
