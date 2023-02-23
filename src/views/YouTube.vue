<script setup>
import YTheader from '../components/YTheader.vue';
import YTsidebar from '../components/YTsidebar.vue'
import YTcard from '../components/YTcard.vue'
</script>

<template>
    <div class="yt-cont">
        <YTheader/>
        <div class="l1">
            <div>
                <YTsidebar/>
            </div>
            <div class="videos">
                <YTcard/>
                <YTcard/>
                <YTcard/>
                <YTcard/>
                <YTcard/>
                <YTcard/>
                <YTcard/>
                <YTcard/>
                <YTcard/>
            </div>

        </div>
    </div>
</template>

<style scoped>
.yt-cont{
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 100vh;
}
.l1{
    width: 100%;
    height: 100%;
    background: lig;
    display: flex;
}

.videos{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    padding-top: 30px;
}

</style>