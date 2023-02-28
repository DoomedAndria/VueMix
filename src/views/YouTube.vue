<script setup>
import YTsidebar from "../components/YTsidebar.vue";
import YTcard from "../components/YTcard.vue";
import YTheaderLayout from "../layouts/YTheaderLayout.vue";
import TabList from "../components/TabList.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const isShrunk = computed(() => {
	return store.getters["youtube/getSidebarShrunk"];
});
const videos = computed(() => {
	return store.getters["youtube/getVideos"];
});


</script>

<template>
	<YTheaderLayout>
		<div class="l1">
			<YTsidebar />
      <TabList></TabList>
			<div class="videos" :style="{ marginLeft: isShrunk ? '64px' : '200px' }">
				<YTcard
					v-for="item in videos"
					:id="item.id"
					:video_id="item.video_id"
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
	</YTheaderLayout>
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
	padding: 30px 20px 0 10px;
	margin-left: 200px;
  margin-top: 5vh;
}
</style>
