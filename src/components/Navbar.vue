<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const items = [
	{
		id: 1,
		name: "HOME",
		url: "/",
	},
	{
		id: 2,
		name: "PLAYLIST",
		url: "/playlist",
	},
	{
		id: 3,
		name: "CURRENCIES",
		url: "/currencies",
	},
];
const cartItemNum = computed(() => {
	console.log(store.getters)
	return 0;
});
</script>

<template>
	<div class="nav">
		<ul>
			<li v-for="item in items" :key="item.id" :id="item.id">
				<router-link :to="item.url"> {{ item.name }} </router-link>
			</li>
		</ul>
		<ul>
			<li class="crt">
				<router-link to="/favs">
					<i class="gg-heart"></i>
				</router-link>
				<div class="cart-items">
					{{ cartItemNum }}
				</div>
			</li>
		</ul>
	</div>
</template>

<style scoped>
@import url("https://css.gg/heart.css");

.nav {
	background-color: #659dbd;
	color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;
	padding: 0 4rem;
	font-weight: 700;
	box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
.nav ul {
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	gap: 1rem;
}
.nav li {
	padding: 0.5rem;

	font-weight: 550;
	font-size: 25px;
	transition: all 0.35s;
}
.nav .crt {
	position: relative;
	border-radius: 5px;
	border: 2px solid white;
}
.nav li:hover {
	background-color: rgba(255, 255, 255, 0.879);
	box-shadow: 0 0 20px 1px #ffffff84;
	color: rgb(76, 76, 101);
}
.nav a {
	color: inherit;
	font-weight: inherit;
	font-size: inherit;
	text-decoration: none;
	display: flex;
	align-items: center;
	padding: 0.25rem;
}

.cart-items {
	position: absolute;
	top: -7px;
	right: -7px;
	width: 18px;
	height: 18px;
	border-radius: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: red;
	color: white;
	font-size: 14px;
}
</style>
