<script setup>
import YTheaderLayout from '../layouts/YTheaderLayout.vue';
</script>

<template>
  <YTheaderLayout>
    <div class="setting-links">
      <router-link to="/youtube/settings/editProfile">edit profile</router-link>
    </div>
  </YTheaderLayout>
</template>

<style scoped>
.setting-links {
  margin: 30px;
  font-size: 30px;
}

.setting-links a {
  border: solid 1px black;
  padding: 10px;
}
</style>
