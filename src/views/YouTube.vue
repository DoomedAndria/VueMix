<script setup>
import YTheader from "../components/YTheader.vue";
import YTsidebar from "../components/YTsidebar.vue";
import YTcard from "../components/YTcard.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const videos = computed(() => {
	return store.getters["youtube/getVideos"];
});
</script>

<template>
	<div class="yt-cont">
		<YTheader />
		<div class="l1">
			<div class="side">
				<YTsidebar />
			</div>
			<div class="videos">
				<YTcard
					v-for="item in videos"
					:id="item.id"
					:url="item.url"
					:name="item.name"
					:channel="item.channel"
					:thumbnail="item.thumbnail"
					:date_uploaded="item.date_uploaded"
					:views="item.views"
					:channel_image="item.channel_image"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped>
.yt-cont {
	background-color: white;
	display: flex;
	flex-direction: column;
	width: 100vw;
	min-height: 100vh;
}
.l1 {
	margin-top: 56px;
	width: 100%;
	height: 100%;
	background: lig;
	display: flex;
}

.side {
	width: 200px;
	height: 100%;
}

.videos {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	justify-content: center;
	padding-top: 30px;
}
</style>
