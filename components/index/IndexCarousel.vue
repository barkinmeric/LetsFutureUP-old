<template>
	<div class="index-carousel">
		<slider :pagination="true">
			<slider-inner>
				<div class="slide-el" @click="(toggleModal = !toggleModal) & playVideo()">
					<icon-play-button width="96px" height="96px" />
					<nuxt-img format="jpg" draggable="false" :src="$t('index.slider.thumbnail')" alt="thumbnail" style="cursor:pointer;" />
				</div>
			</slider-inner>
			<slider-inner>
				<div class="slide-el">
					<nuxt-img format="jpg" :src="$t('index.slider.4')" alt="carousel4" draggable="false" />
				</div>
			</slider-inner>
			<slider-inner>
				<div class="slide-el">
					<nuxt-img format="jpg" :src="$t('index.slider.2')" alt="carousel2" draggable="false" />
				</div>
			</slider-inner>
			<slider-inner>
				<div class="slide-el">
					<nuxt-img format="jpg" :src="$t('index.slider.3')" alt="carousel3" draggable="false" />
				</div>
			</slider-inner>
		</slider>
		<div class="videoModal" v-show="toggleModal">
			<span @click="(toggleModal = false) & pauseVideo()" class="close"><icon-times width="32px" height="32px"/></span>
			<video @click="!$event.target.paused ? pauseVideo() : playVideo()" @touchstart="!$event.target.paused ? pauseVideo() : playVideo()" preload="none">
				<source :src="$t('index.slider.1')" type="video/mp4" />
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
		max-height: 700px;
		background-color: $mainColor;
		svg {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			cursor: pointer;
			border: 2px solid $sideColor;
			border-radius: 100%;
			color: white;
			background-color: $sideColor;
			&:hover {
				animation: submit 1s infinite;
			}
		}
		img {
			max-height: 700px;
			max-width: 1920px;
			height: 100%;
			width: 100%;
		}
	}
	.videoModal {
		position: fixed;
		z-index: 20;
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
@keyframes submit {
	0% {
		box-shadow: 0px 0px 0px 0px rgba(0, 255, 0, 0.7);
	}
	70% {
		box-shadow: 0px 0px 0px 10px rgba(0, 255, 0, 0);
	}
	100% {
		box-shadow: 0px 0px 0px 0px rgba(0, 255, 0, 0);
	}
}
</style>
