<template>
    <div class="profc-cont" @click="this.$router.push('/')">
        <img src="src\assets\icons\signout.png" alt="">
        sign out
    </div>
</template>


<style scoped>
.profc-cont{
    position: absolute;
    right: 45px;
    top: 0;
    background-color: #fff;
    width: 290px;
    height: 40px;
    padding-left: 20px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    border-radius: 7px;
    box-shadow: 0px 4px 32px 0px rgb(0 0 0 / 10%);
    cursor: pointer;
}

.profc-cont:hover{
    background-color: #f8f4f4;
}
.profc-cont img{
    width: 24px;
    margin-right: 10px;
}
</style>