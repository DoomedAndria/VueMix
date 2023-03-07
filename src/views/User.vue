<script setup>
import DefaultLayout from "../layouts/DefaultLayout.vue";
import {useRoute,useRouter} from "vue-router";
import {computed, onMounted} from "vue";
import {useStore} from "vuex";

const route = useRoute()
const router = useRouter()
const store = useStore()

const user = computed(()=>{
  return store.getters["users/getUserById"](route.params.id)
})

</script>

<template>
<DefaultLayout>

  <div class="w-full flex flex-col">
    <button @click="router.push('/users')" class="p-[8px] m-[10px] bg-green-400 text-[white] w-[150px] font-medium">back</button>
    <div class="w-[400px] bg-amber-200 p-[7px] m-[10px]">
      <div class="w-full aspect-square">
        <img :src="user.avatar" alt="adas" class="w-full h-full object-cover">
      </div>
      <div class="flex flex-col gap-[6px] text-[darkblue] font-medium">
        <p> <span class="text-[green]">name: </span>{{user.name}}</p>
        <p> <span class="text-[green]">email:</span> {{user.email}}</p>
        <p> <span class="text-[green]">seen:</span> {{user.seen}}</p>
        <p> <span class="text-[green]">date:</span> {{user.date}}</p>
        <p> <span class="text-[green]">likes_count:</span> {{user.likes_count}}</p>

      </div>
    </div>
  </div>
</DefaultLayout>
</template>
<style scoped>

</style>