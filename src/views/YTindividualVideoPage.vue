<script setup>
import YTheaderLayout from "../layouts/YTheaderLayout.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
onMounted(() => {
	console.log(route.params);
});
const src = `https://www.youtube.com/embed/${route.params.id}`
</script>


<template>
	<YTheaderLayout
		>{{ route.params.id }}
		<iframe
			width="892"
			height="502"
			:src="src"
		>
		</iframe>
	</YTheaderLayout>
</template>

<style scoped></style>
