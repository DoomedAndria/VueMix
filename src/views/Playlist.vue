<script>
import MusicCard from '../components/MusicCard.vue'
export default{
    components:{MusicCard},
    created(){
        this.$store.dispatch('fetchPlaylist')
    },
    computed: {
        playlist(){
            return this.$store.state.playlist
        }
    },
}
</script>

<template>
    <div class="cont">
        <h1>Playlist</h1>
        <div class="cards">
            <MusicCard v-for="item in playlist" 
            :name="item.name" 
            :artist="item.artist"
            :preview="item.preview"
            :image="item.image"
            :date="item.date_added.slice(0,10)"
            :time="item.date_added.slice(11,16)"
             />
        </div>
    </div>
</template>

<style scoped>
.cont{
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    padding: 20px 50px;
}

.cont .cards{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.cont h1{
    font-size: 35px;
    font-weight: 700;
    text-decoration: underline;
    margin: 10px;
    color: rgb(72, 71, 71);
}
</style>