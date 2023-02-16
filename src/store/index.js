import { createStore } from "vuex"
import axios from "axios"

export default createStore({
    state: {
        playlist: null,
        cart: [],
    },
    mutations:{
        updatePlaylist(state,playlist){
            state.playlist = playlist
        },
        addItemToCart(state,item){
            state.cart.push(item)
        },
    },
    actions:{
        fetchPlaylist({commit}){
            axios.get('https://doomedandria.github.io/playlist_api2/api2.json')
                .then((result)=>{
                    commit('updatePlaylist',result.data)
                    console.log('response data ',result.data)
                })
                .catch(console.error)
        }
    },
    getters:{
        getPlaylist(state){
            return state.playlist
        },
        getCart(state){
            return state.cart
        }

    }
})