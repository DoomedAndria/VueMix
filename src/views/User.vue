<script setup>
import DefaultLayout from "../layouts/DefaultLayout.vue";
import {useRoute} from "vue-router";
import {computed, onMounted} from "vue";
import {useStore} from "vuex";

const route = useRoute()
const store = useStore()

const user = store.getters["users/getUserById"](1)

onMounted(()=>{
  console.log(user)
})

</script>

<template>
<DefaultLayout>
  <div class="w-full flex justify-center align-middle ">
    <div class="w-[400px] bg-amber-300 ">
      <div class="w-full aspect-square">
        <img :src="user" alt="adas" class="object-cover">
      </div>
      <div>
        {{user}}
      </div>
    </div>
  </div>
</DefaultLayout>
</template>



<style scoped>

</style>