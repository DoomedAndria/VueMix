<script setup></script>

<template>
	<div class="yt-card-cont">
		<div class="yt-image">
			<img src="https://i.ytimg.com/vi/qCm0uKgQxvc/hqdefault.jpg" alt="" />
		</div>
		<div class="name-avatar">
			<div class="img-av">
				<img src="https://yt3.ggpht.com/M4pctOKG0tLW2BKn_YsEdnkAI-dDiQt57cEsRpkO5DbDHPTPsfnwAynReLHCG4hsQ7-EOozqtQ=s68-c-k-c0x00ffffff-no-rj" alt="">
			</div>
			<div class="nm">
				<p>Liverpool vs. Real Madrid: Extended Highlights | UCL Round of 16 - Leg 1 | CBS Sports Golazo</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
.name-avatar {
    margin-top: 10px;
    display: flex;
    max-height: ;
}
.img-av {
	width: 36px;
	height: 36px;
}
.img-av img {
    
	width: 100%;
	height: 100%;
	object-fit: cover;
    border-radius: 100%;
}
.nm {
    margin: 0 10px;
	padding:  0 5px;
	width: 230px;
	font-size: 12px;
	font-weight: 900;
	overflow: auto;
}

.yt-card-cont {
	display: flex;
	flex-direction: column;
	width: 280px;
	height: 250px;
	border: 1px solid black;
	margin: 0 8px 40px 8px;
}

.yt-image {
	width: 100%;
	height: 150px;
	border-radius: 10px;
}

.yt-image img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: inherit;
}
</style>
