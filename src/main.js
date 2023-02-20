import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import { createStore } from 'vuex'

const store = createStore({
    // ...
})

createApp(App).use(store).mount('#app')
