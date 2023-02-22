<script setup>
import { computed } from "vue";
const props = defineProps({
	code: String,
	name: String,
	quantity: Number,
	rate: Number,
	diff: Number,
});

const inc = computed(() => {
	return props.diff > 0;
});
</script>

<template>
	<div
		class="cur-cont"
		:style="{ background: inc ? 'lightcoral' : 'lightgreen' }"
	>
		<div
			class="code"
			:style="{
				background: inc
					? 'rgba(150, 71, 71, 0.759)'
					: 'rgba(44, 149, 44, 0.319)',
			}"
		>
			{{ code }}
		</div>
		<div class="name st-flex">
			{{ name }}
		</div>
		<div class="st-flex">
			{{ quantity }}
		</div>
		<div class="st-flex">{{ rate }} ₾</div>
		<div class="diff">
			<div class="st-flex">
				<div :class="[inc ? 'top-triangle' : 'bot-triangle']"></div>
			</div>
			<div class="value st-flex" :style="{ color: inc ? 'red' : 'green' }">
				{{ diff }} ₾
			</div>
		</div>
	</div>
</template>

<style scoped>
.cur-cont {
	width: 1000px;
	height: 100px;
	margin: 10px;
	padding: 10px;
	display: flex;
	justify-content: space-between;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.code {
	height: 100%;
	aspect-ratio: 1/1;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 30px;
	font-weight: 900;
	/* background-color: rgba(150, 71, 71, 0.759); */
	/* background-color: rgba(44, 149, 44, 0.319); */
	border-radius: 10px;
}

.name {
	display: flex;
	height: 100%;
	justify-content: center;
	align-items: center;
	font-weight: 900;
	font-size: 18px;
}

.diff {
	width: 150px;
	display: flex;
}

.st-flex {
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 900;
	font-size: 18px;
}

.bot-triangle {
	width: 0;
	height: 0;
	border-left: 15px solid transparent;
	border-right: 15px solid transparent;

	border-top: 20px solid green;
}

.top-triangle {
	width: 0;
	height: 0;
	border-left: 15px solid transparent;
	border-right: 15px solid transparent;

	border-bottom: 20px solid red;
}
</style>
