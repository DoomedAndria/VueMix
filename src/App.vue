<script setup>
import { useStore } from "vuex";
import { onMounted } from "vue";
const store = useStore();
onMounted(() => {
  store.dispatch("playlist/fetchPlaylist");
  store.dispatch("currencies/fetchCurrencies");
  store.dispatch("youtube/fetchApiVideos");
  store.dispatch("youtube/fetchVideos");
  store.dispatch("users/fetchUsers");
});
</script>

<template>
  <router-view></router-view>
</template>