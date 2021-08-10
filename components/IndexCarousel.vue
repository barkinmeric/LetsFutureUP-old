<template>
	<div class="index-carousel">
		<slider :pagination="true" :arrows="true">
			<slider-inner>
				<div class="slide-el">
					<video @mousedown="playVideo($event)" @touchstart="playVideo($event)" class="video" controls poster="/img/carousel/carousel1-tr.png" preload="none">
						<source src="/videos/tr.mp4" type="video/mp4" />
					</video>
				</div>
			</slider-inner>
			<slider-inner>
				<div class="slide-el">
					<nuxt-img draggable="false" src="/img/carousel/carousel2.png" alt="carousel2" />
				</div>
			</slider-inner>
			<slider-inner>
				<div class="slide-el">
					<nuxt-img draggable="false" src="/img/carousel/carousel3.png" alt="carousel3" />
				</div>
			</slider-inner>
		</slider>
	</div>
</template>

<script>
export default {
	name: "IndexCarousel",
	data() {
		return {
			isPlaying: false,
		};
	},
	methods: {
		playVideo(event) {
			if (this.isPlaying == false) {
				event.target.play();
				this.isPlaying = true;
			} else {
				event.target.pause();
				this.isPlaying = false;
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.index-carousel {
	user-select: none;
	.slide-el {
		height: 100%;
		width: 100%;
		max-height: 500px;
		img,
		video {
			background-color: $mainColor;
			min-height: 200px;
			max-height: 500px;
			height: 100%;
			width: 100%;
			cursor: pointer;
		}
	}
}
</style>
