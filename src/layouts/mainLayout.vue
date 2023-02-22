<script setup >
import Navbar from "../components/Navbar.vue"
</script>

<template>
    <div>
		<header>
			<Navbar />
		</header>
		<main>
			<slot/>
		</main>
	</div>
</template>