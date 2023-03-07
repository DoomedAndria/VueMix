<script setup>
import DefaultLayout from "../layouts/DefaultLayout.vue"
import {useStore} from "vuex";
import {computed} from "vue";
import {useRouter} from "vue-router";

const store = useStore()
const router = useRouter()

const users = computed(() => {
  return store.getters["users/getUsers"]
})
</script>

<template>
  <DefaultLayout>
    <div class=" flex flex-row flex-wrap justify-center">

      <div v-for="item in users" class="bg-amber-200 w-[250px] p-[7px] m-[30px] flex flex-col">
        <div class="w-full aspect-square">
          <img :src="item.avatar" alt="asd" class="w-full h-full object-cover">
        </div>
        <p>{{ item.name }}</p>
        <p>{{ item.email }}</p>
        <button @click="router.push(`/users/${item.id}`)" class="bg-green-400 p-[5px] mt-[5px] border-solid border-[1px] border-black ">view more</button>
      </div>

    </div>
  </DefaultLayout>
</template>

<style scoped>

</style>