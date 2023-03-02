<script setup>
import {useStore} from "vuex";
import {computed} from "vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import {useRouter} from "vue-router";
const router = useRouter();
const store = useStore();
const profile = computed(() => {
  return store.getters["youtube/getProfile"]
});

const formProfile = profile

const save = () => {
  store.commit('youtube/updateProfile', formProfile)
  router.push('/youtube')
}
</script>

<template>
  <DefaultLayout>
    <div class="edit-inputs">
      <div>
        name:
        <input type="text" :value="profile.name" @change="(e) => formProfile.name = e.target.value"/>
      </div>
      <div>
        surname:
        <input type="text" :value="profile.surname" @change="(e) => formProfile.surname = e.target.value"/>
      </div>
      <div>
        image url:
        <input type="text" :value="profile.image" @change="(e) => formProfile.image = e.target.value"/>
      </div>

      <button @click="save">save</button>
    </div>

  </DefaultLayout>
</template>

<style scoped>
.edit-inputs {
  display: flex;
  flex-direction: column;
}

.edit-inputs > * {
  margin: 10px;
}

.edit-inputs button {
  width: 70px;
  height: 30px;
  background: #659dbd;
  color: white;
  font-weight: 900;
}

.edit-inputs div {
  display: flex;
  flex-direction: column;

}
</style>
