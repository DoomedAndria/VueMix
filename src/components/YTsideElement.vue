<script setup>
const props = defineProps({
	name: String,
	icon: String,
});
</script>
<template>
	<div class="side-el">
		<img :src="icon" alt="" />
		{{ name }}
	</div>
</template>
