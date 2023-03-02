<script setup>
import {useStore} from "vuex";

const store = useStore()

const tabList = store.getters["youtube/getCategories"]
const updateCategoryId = (id) => store.commit("youtube/updateCategoryId", id)
</script>

<template>
  <div class="tab ">
    <button v-for="cat in tabList" class="m-[3px] p-[5px] hover:bg-neutral-200 hover:rounded-[10px]"
            @click="updateCategoryId(cat.id)">{{
        cat.name
      }}
    </button>
  </div>
</template>

<style scoped>
.tab{
  display: flex;
  align-items: center;
  background: white;
  height: 50px;
  width: 100%;
  justify-content: center;
}
</style>