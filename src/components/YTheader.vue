<script setup>
import ProfC from './ProfC.vue';
import { ref } from 'vue';

const ProfCopen = ref(false)

function toggle(){
	ProfCopen.value = !ProfCopen.value
}
</script>

<template>
	<div class="yt-header-cont">
		<div>
			<div class="but-cont">
				<img src="src\assets\icons\hamburger.png" alt="ham" />
			</div>
			<div class="yt-logo">
				<img src="src\assets\icons\youtube.png" alt="log" />
			</div>
		</div>
		<div>
			<input type="text" class="search" placeholder="Search" />
			<button class="search-but">
				<img src="src\assets\icons\search.png" alt="log" />
			</button>
		</div>
		<div style="position: relative;">
			<ProfC v-if="ProfCopen"/>

			<div class="but-cont">
				<img src="src\assets\icons\create.png" alt="log" />
			</div>
			<div class="but-cont">
				<img src="src\assets\icons\bell.png" alt="log" />
			</div>
			<div
				@click="toggle"
				style="
					width: 32px;
					height: 32px;
					background-color: black;
					border-radius: 40px;
					cursor: pointer;
				"
			></div>
		</div>
	</div>
</template>

<style>
.search {
	border: 1px solid #d3d3d3;
	border-right: 1px solid transparent;
	outline: none;
	height: 40px;
	border-radius: 40px 0 0 40px;
	padding-left: 20px;
	width: 500px;
}

.search:focus {
	border: solid 1px blue;
	box-shadow: inset 0 1px 2px #eee;
}

.search-but {
	border: 1px solid #d3d3d3;
	background-color: #f8f8f8;
	height: 40px;
	width: 64px;
	border-radius: 0 40px 40px 0;
	display: flex;
	justify-content: center;
	align-items: center;
}
.search-but img {
	width: 24px;
}

.search-but:hover {
	background-color: #f0f0f0;
}

.yt-header-cont {
	position: fixed;
	width: 100%;
	height: 56px;
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 25px;
}

.yt-header-cont > div {
	display: flex;
	align-items: center;
}

.yt-header-cont > div > div {
	margin: 0 5px;
}

.but-cont {
	width: 40px;
	height: 40px;
	padding: 6px;
	border-radius: 20px;

	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
}

.but-cont:hover {
	background: #dbdbdb;
}

.but-cont img {
	width: 100%;
}

.yt-logo {
	width: 120px;
	height: 100%;
}

.yt-logo img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
