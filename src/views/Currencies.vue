<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import CurrencyCard from "../components/CurrencyCard.vue";

const store = useStore();

const currencies = computed(() => {
	return store.getters.getCurrencies;
});
</script>

<template>
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
</template>

<style scoped>
.cont {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
