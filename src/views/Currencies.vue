<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import NavLayout from "../layouts/NavLayout.vue";
import CurrencyCard from "../components/CurrencyCard.vue";

const store = useStore();

const currencies = computed(() => {
	return store.getters["currencies/getCurrencies"];
});
</script>

<template>
	<NavLayout>
		<div class="cont">
			<CurrencyCard
				v-for="item in currencies"
				:name="item.name"
				:code="item.code"
				:quantity="item.quantity"
				:rate="item.rate"
				:diff="item.diff"
			></CurrencyCard>
		</div>
	</NavLayout>
</template>

<style scoped>
.cont {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
