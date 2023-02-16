<script>
export default{
    props:{
        name: String,
        artist: String,
        preview: String,
        image: String,
        date: String,
        time: String
    },

    data(){
        return{
            playing: false
        }
    },

    computed:{
        backColor(){
            return  {background: this.playing?'rgba(48, 121, 48, 0.868)':''};
        }
    },

    methods:{
        play: function(){
            var audio = this.$refs.aud
            if(!this.playing)
                audio.play();
            else{
                audio.pause()
            }
            this.playing = !this.playing
        }
        }
    }
</script>


<template>
    <div class=" shadow-lg rounded p-3 c-cont" :style="backColor" >
        <div class="group relative">
          <img class="w-full md:w-72 block rounded" :src="image" alt="" />
          <div class="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
            

            <button @click="play" class="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                <i v-if="!playing" class="gg-play-button-o"></i>
                <i v-else class="gg-play-pause-o"></i>
            </button>

          </div>
        </div>
        <div class="p-5">
          <h3 class="text-white text-lg">{{name}}</h3>
          <p class="small">{{artist}}</p>
          <p class="small corner-l">{{date}}</p>
          <p class="small corner-r">{{time}}</p>
        </div>
        <audio @ended="playing=false" ref="aud" :src="preview"></audio>
      </div>
      
</template>


<style scoped>
@import url('https://css.gg/play-button-o.css');
@import url('https://css.gg/play-pause-o.css');
.c-cont{
    position: relative;
    width: 250px;
    height: 400px;
    margin: 13px;
    background-color: #5f7382;
    transition: all 0.25s;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.small{
    color: rgb(199, 194, 194);
}

.corner-l{
    position: absolute;
    bottom: 3px;
    left: 5px;
    font-size: 13px;
}

.corner-r{
    position: absolute;
    bottom: 3px;
    right: 5px;
    font-size: 13px;
}

</style>