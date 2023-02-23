<script setup></script>

<template>
	<div class="side-cont">
		<div class="side-el">
            <img src="src\assets\icons\home.png" alt="">
            Home
        </div>
		<div class="side-el">
            <img src="src\assets\icons\shorts.png" alt="">
            Shorts
        </div>
		<div class="side-el">
            <img src="src\assets\icons\subscriptions.png" alt="">
            Subscriptions
        </div>
		<div class="side-el">
            <img src="src\assets\icons\library.png" alt="">
            Library
        </div>

        <h2>subscriptions</h2>
        <div>

        </div>
	</div>
</template>

<style scoped>
.side-cont {
    position: fixed;
    display: flex;
    flex-direction: column;
	width: 200px;
    height: 100%;
    height: inherit;
    background-color: white;
    margin: 10px;
}


.side-cont h2{
    margin: 20px 0;
    
}

.side-el {
	height: 40px;
	width: 100%;
	border-radius: 10px;
	padding-left: 15px;

	display: flex;
	align-items: center;
    transition: all 0.08s;
    cursor: pointer;
}

.side-el:hover{
    background-color: #f5f3f3;
}
.side-el img{
    width: 24px;
    margin-right: 15px;
}

</style>
