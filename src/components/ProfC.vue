<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const profile = computed(() => {
	return store.getters["youtube/getProfile"];
});
</script>
<template>
	<div class="profc-cont">
		<div class="profc-el-p">
			<div>
				<img :src="profile.image" alt="a" />
				<div>{{ profile.name }} {{ profile.surname }}</div>
			</div>
			<p>{{ profile.email }}</p>
		</div>
		<div class="profc-el" @click="this.$router.push('/youtube/settings')">
			<img src="src\assets\icons\settings.png" alt="" />
			settings
		</div>
		<div class="profc-el" @click="this.$router.push('/')">
			<img src="src\assets\icons\signout.png" alt="" />
			sign out
		</div>
	</div>
</template>

<style scoped>
.profc-el-p {
	background-color: white;
	padding: 10px;
	border-bottom: 1px solid black;
}
.profc-cont {
	padding: 10px;
	background-color: white;
	position: absolute;
	right: 45px;
	top: 0;
	border: 1px solid black;
	border-radius: 7px;
}

.profc-el {
	border-radius: inherit;
	background-color: #fff;
	width: 290px;
	height: 40px;
	padding-left: 20px;
	display: flex;
	align-items: center;
	cursor: pointer;
}
.profc-el:hover {
	background-color: #f8f4f4;
}
.profc-el img {
	width: 24px;
  aspect-ratio: 1/1;
  margin-right: 10px;
}
.profc-el-p img {
  width: 100%;
  height: 100%;
  border-radius: inherit;
	margin-right: 10px;
}
.profc-el-p > div {
	display: flex;
	align-items: center;
	margin-bottom: 10px;
  width: 50px;
  height: 50px;
  border-radius: 100%;

}
</style>
