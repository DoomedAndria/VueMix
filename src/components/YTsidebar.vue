<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import YTsideElement from "./YTsideElement.vue";

const store = useStore();

const isSrunk = computed(() => {
	return store.getters["youtube/getSidebarShrunk"];
});

const sidebarItems = computed(() => {
	return store.getters["youtube/getSidebarItems"];
});
</script>

<template>
	<div :class="['side-cont', isSrunk ? 'shrunk' : '']">
		<YTsideElement
			v-for="item in sidebarItems"
			:name="item.name"
			:icon="item.icon"
		/>

		<!-- <h2>subscriptions</h2> -->
	</div>
</template>

<style>
.side-cont.shrunk {
	width: 64px;
	margin: 5px;
}

.side-cont.shrunk .side-el {
	height: 74px;
	flex-direction: column;
	font-size: 10px;
	padding: 0;
	justify-content: center;
	align-items: center;
}

.side-cont.shrunk .side-el img {
	margin: 0;
}

.side-cont {
	position: fixed;
	display: flex;
	flex-direction: column;
	width: 200px;
	background-color: white;
	margin: 10px;
}
.side-el {
	height: 40px;
	width: 100%;
	border-radius: 10px;
	padding-left: 15px;

	display: flex;
	align-items: center;
	transition: all 0.08s;
	cursor: pointer;
}

.side-cont h2 {
	margin: 20px 0;
}

.side-el:hover {
	background-color: #f5f3f3;
}
.side-el img {
	width: 24px;
	margin-right: 15px;
}
</style>
