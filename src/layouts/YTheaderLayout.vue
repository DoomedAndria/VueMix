<script setup>
import DefaultLayout from './DefaultLayout.vue';
import YTheader from '../components/YTheader.vue';
import TabList from '../components/TabList.vue';
const props = defineProps({
	video:Object
})
</script>

<template>
    <DefaultLayout>
		<div class="yt-cont">
			<div class="yt-header-place"></div>
			<YTheader />
			<slot/>
		</div>
	</DefaultLayout>
</template>

<style scoped>
.yt-cont {
	background-color: white;
	display: flex;
	flex-direction: column;
	max-width: 100vw;
	min-height: 100vh;
}
.yt-header-place{
	width: 100%;
	height: 56px;
}
</style>
