<template>
	<div class="index-carousel">
		<slider :pagination="true" :autoplay="true">
			<slider-inner>
				<div class="slide-el" @click="(toggleModal = !toggleModal) & playVideo()">
					<icon-play-button width="96px" height="96px" />
					<nuxt-img draggable="false" :src="$t('slider.thumbnail')" alt="thumbnail" style="cursor:pointer;" />
				</div>
			</slider-inner>
			<slider-inner>
				<div class="slide-el">
					<nuxt-img draggable="false" :src="$t('slider.2')" alt="carousel2" loading="lazy" />
				</div>
			</slider-inner>
			<slider-inner>
				<div class="slide-el">
					<nuxt-img draggable="false" :src="$t('slider.3')" alt="carousel3" loading="lazy" />
				</div>
			</slider-inner>
		</slider>
		<div class="videoModal" v-show="toggleModal">
			<span @click="(toggleModal = false) & pauseVideo()" class="close"><icon-times width="32px" height="32px" color="#ccc"/></span>
			<video @click="!$event.target.paused ? pauseVideo() : playVideo()" @touchstart="!$event.target.paused ? pauseVideo() : playVideo()" preload="none">
				<source :src="$t('slider.1')" type="video/mp4" />
			</video>
		</div>
	</div>
</template>

<script>
export default {
	name: "IndexCarousel",
	data() {
		return {
			toggleModal: false,
		};
	},
	methods: {
		playVideo() {
			this.$el.lastChild.lastChild.play();
			// window.clearInterval(this.$children[0].intervalId);
		},
		pauseVideo() {
			this.$el.lastChild.lastChild.pause();
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
		min-height: 200px;
		max-height: 700px;
		background-color: $mainColor;
		svg {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			cursor: pointer;
		}
		img {
			min-height: 200px;
			max-height: 700px;
			max-width: 1920px;
			height: 100%;
			width: 100%;
		}
	}
	.videoModal {
		position: fixed;
		z-index: 1;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: rgba($color: #000000, $alpha: 0.8);
		text-align: center;
		.close {
			width: 100%;
			height: 52px;
			padding: 10px;
			display: inline-block;
			text-align: right;
			font-weight: bold;
			&:hover {
				cursor: pointer;
				svg {
					color: white;
				}
			}
		}
		video {
			background-color: $mainColor;
			width: 80%;
		}
	}
}
@media (max-width: 1200px) {
	.index-carousel {
		.videoModal {
			video {
				width: 100%;
			}
		}
	}
}
</style>
