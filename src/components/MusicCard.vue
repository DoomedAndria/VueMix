<script setup>
import { computed, defineProps, ref } from "vue";
import { useStore } from "vuex";
const props = defineProps({
	id: Number,
	name: String,
	artist: String,
	preview: String,
	image: String,
	date: String,
	time: String,
	isFav: Boolean,
});

const store = useStore();

const playing = ref(false);
const aud = ref(null);

const backColor = computed(() => {
	return { background: playing.value ? "rgb(176, 120, 98)" : "" };
});

const butCol = computed(() => {
	return { background: props.isFav ? "orange" : "" };
});

const play = () => {
	const audio = aud.value;
	if (!playing.value) audio.play();
	else {
		audio.pause();
	}
	playing.value = !playing.value;
};

const dlt = (e) => {
	playing.value = false;
	aud.value.pause();

	var id = e.currentTarget.getAttribute("item_id");
	if (props.isFav) {
		store.commit("removeItemFromFavs", id);
	} else {
		store.commit("removeItemFromPlaylist", id);
	}
};

const add = (e) => {
	playing.value = false;
	aud.value.pause();

	var id = e.currentTarget.getAttribute("item_id");
	var item;
	if (props.isFav) {
		item = store.getters.getItemByIdF(id);
		console.log(item);
		store.commit("addItemToPlaylist", item);
		store.commit("removeItemFromFavs", id);
	} else {
		item = store.getters.getItemByIdP(id);
		store.commit("addItemToFavs", item);
		store.commit("removeItemFromPlaylist", id);
	}
};
</script>

<template>
	<div class="shadow-lg rounded p-3 c-cont" :style="backColor">
		<div class="group relative">
			<img class="w-full md:w-72 block rounded" :src="image" alt="" />
			<div
				class="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly"
			>
				<button
					@click="play"
					class="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
				>
					<i v-if="!playing" class="gg-play-button-o"></i>
					<i v-else class="gg-play-pause-o"></i>
				</button>
			</div>
		</div>
		<div class="p-5">
			<h3 class="text-white text-lg name">{{ name }}</h3>
			<p class="small">{{ artist }}</p>

			<div class="buttons">
				<div class="add" @click="add" :item_id="id" :style="butCol">
					<i v-if="isFav" class="gg-remove"></i>
					<i v-else class="gg-add"></i>
				</div>
				<div class="del" @click="dlt" :item_id="id">
					<i class="gg-trash-empty"></i>
				</div>
			</div>

			<p class="small corner-l">{{ date }}</p>
			<p class="small corner-r">{{ time }}</p>
		</div>
		<audio @ended="playing = false" ref="aud" :src="preview"></audio>
	</div>
</template>

<style scoped>
@import url("https://css.gg/trash-empty.css");
@import url("https://css.gg/add.css");
@import url("https://css.gg/remove.css");
@import url("https://css.gg/play-button-o.css");
@import url("https://css.gg/play-pause-o.css");
.c-cont {
	position: relative;
	width: 250px;
	height: 400px;
	margin: 13px;
	background-color: #5f7382;
	transition: all 0.25s;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.small {
	color: rgb(199, 194, 194);
}

.corner-l {
	position: absolute;
	bottom: 3px;
	left: 5px;
	font-size: 13px;
}

.corner-r {
	position: absolute;
	bottom: 3px;
	right: 5px;
	font-size: 13px;
}

.name {
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}

.buttons {
	width: 100%;
	display: flex;
	padding: 10px;
	justify-content: space-between;
}

.add,
.del {
	width: 35px;
	height: 35px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 2px solid white;
	color: white;
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.25s;
}
.add {
	background-color: rgb(75, 168, 115);
}
.del {
	background-color: rgb(225, 61, 94);
}

.add:hover {
	background-color: seagreen;
}
.del:hover {
	background-color: crimson;
}
</style>
