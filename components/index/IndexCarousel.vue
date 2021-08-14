<template>
	<div class="index-carousel">
		<slider :pagination="true" :autoplay="true">
			<slider-inner>
				<!-- <div class="slide-el">
					<video @mousedown="playVideo($event)" @touchstart="playVideo($event)" class="video" controls :poster="$t('slider.thumbnail')" preload="none">
						<source :src="$t('slider.1')" type="video/mp4" />
					</video>
				</div> -->
			</slider-inner>
			<slider-inner>
				<div class="slide-el">
					<nuxt-img draggable="false" :src="$t('slider.2')" alt="carousel2" />
				</div>
			</slider-inner>
			<slider-inner>
				<div class="slide-el">
					<nuxt-img draggable="false" :src="$t('slider.3')" alt="carousel3" />
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
		max-height: 700px;
		img,
		video {
			background-color: $mainColor;
			min-height: 200px;
			max-height: 700px;
			height: 100%;
			width: 100%;
			cursor: pointer;
		}
	}
}
</style>
