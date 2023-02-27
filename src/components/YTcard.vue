<script setup>
import { computed } from "vue";

const props = defineProps({
	id:Number,
	video_id:String,
	url:String,
	name:String,
	channel:String,
	thumbnail:String,
	date_uploaded:String,
	views:String,
	channel_image:String
})

const formated_views = computed(() => (num) => {
	if (num < 1000) {
		return num.toString();
	} else if (num < 1000000) {
		return (num / 1000).toFixed(1) + "K";
	} else {
		return (num / 1000000).toFixed(1) + "M";
	}
});

const time = computed(()=>(dateString)=>{
	const now = new Date();
	const uploadDate = new Date(dateString);
	const secondsSinceUpload = (now - uploadDate) / 1000;

	const intervals = [
	{ label: 'year', duration: 31536000 },
	{ label: 'month', duration: 2592000 },
	{ label: 'week', duration: 604800 },
	{ label: 'day', duration: 86400 },
	{ label: 'hour', duration: 3600 },
	{ label: 'minute', duration: 60 },
	{ label: 'second', duration: 1 }
	];

	for (let i = 0; i < intervals.length; i++) {
	const interval = intervals[i];
	const intervalDuration = interval.duration;
	if (secondsSinceUpload >= intervalDuration) {
		const count = Math.floor(secondsSinceUpload / intervalDuration);
		const plural = count > 1 ? 's' : '';
		return `${count} ${interval.label}${plural} ago`;
	}
	}
	return 'just now';
})

const gotoWeb = (url)=>{
	window.location.href = url
}
</script>

<template>
	<div class="yt-card-cont" @click="gotoWeb(`/youtube/${video_id}`)">
		<div class="yt-image">
			<img :src="thumbnail" alt="thumbnail" />
		</div>
		<div class="name-avatar">
			<div class="img-av">
				<img
					:src="channel_image"
					alt="channel img"
				/>
			</div>
			<div class="nm">
				<p>{{ name }}</p>
			</div>
		</div>
		<div class="bot-txt">
			<p>{{ channel }}</p>
			<p>{{ formated_views(views) }} views &#x2022 {{ time(date_uploaded) }}</p>
		</div>
	</div>
</template>

<style scoped>
.bot-txt {
	margin-top: 5px;
	margin-left: 51px;
	font-size: 12px;
	color: #606060;
	font-family: 'Roboto', sans-serif;
}
.name-avatar {
	margin-top: 10px;
	display: flex;
}
.img-av {
	width: 36px;
	height: 36px;
}
.img-av img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 100%;
}
.nm {
	margin: 0 10px;
	padding: 0 5px;
	width: 230px;
	height: 40px;
	font-size: 14px;
	font-weight: 600;
}

.nm p {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
}

.yt-card-cont {
	display: flex;
	flex-direction: column;
	width: 280px;
	height: 250px;
	margin: 0 8px 40px 8px;
	cursor: pointer;
}

.yt-image {
	width: 100%;
	height: 150px;
	border-radius: 10px;
}

.yt-image img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: inherit;
}
</style>
