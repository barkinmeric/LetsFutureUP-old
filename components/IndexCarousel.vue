<template>
	<div class="index-carousel" @mousedown="setDesktopCurrentX($event)" @mouseup="checkDesktopSlide($event)" @touchstart="setMobileCurrentX($event)" @touchend="checkMobileSlide($event)" tabindex="0">
		<div class="carousel-slide" v-show="index == 0" @click="showModal = true">
			<nuxt-img draggable="false" src="/img/carousel/carousel1.jpg" alt="carousel1" />
		</div>
		<div class="carousel-slide" v-show="index == 1">
			<nuxt-img draggable="false" src="/img/carousel/carousel2.jpg" alt="carousel2" />
		</div>
		<div class="carousel-slide" v-show="index == 2">
			<nuxt-img draggable="false" src="/img/carousel/carousel3.jpg" alt="carousel3" />
		</div>
		<div class="controller">
			<span @click="index = 0" class="dot" :style="index == 0 ? 'background-color:black;' : 'border-color:white;'"></span>
			<span @click="index = 1" class="dot" :style="index == 1 ? 'background-color:black;' : 'border-color:white;'"></span>
			<span @click="index = 2" class="dot" :style="index == 2 ? 'background-color:black;' : 'border-color:white;'"></span>
		</div>
		<div class="modal" v-show="showModal">
			<span @click="showModal = false" class="close">&times;</span>
			<video class="video" controls preload="none">
				<source src="/videos/tr.mp4" type="video/mp4" />
			</video>
		</div>
	</div>
</template>
<script>
export default {
	name: "IndexCarousel",
	data() {
		return {
			index: 0,
			slidesLength: 3,
			currentX: 0,
			showModal: false,
		};
	},

	methods: {
		next() {
			this.index++;
			if (this.index >= this.slidesLength) {
				this.index = 0;
			}
		},
		prev() {
			this.index--;
			if (this.index < 0) {
				this.index = this.slidesLength - 1;
			}
		},
		setDesktopCurrentX(event) {
			this.currentX = event.clientX;
		},
		setMobileCurrentX(event) {
			this.currentX = event.touches[0].clientX;
		},
		checkDesktopSlide(event) {
			if (this.currentX - event.clientX > 0) {
				this.next();
			} else if (this.currentX - event.clientX < 0) {
				this.prev();
			}
		},
		checkMobileSlide(event) {
			if (this.currentX - event.changedTouches[0].clientX > 0) {
				this.next();
			} else if (this.currentX - event.changedTouches[0].clientX < 0) {
				this.prev();
			}
		},
	},
};
</script>
<style lang="scss" scoped>
.index-carousel {
	position: relative;
	text-align: center;
	width: 100%;
	max-height: 500px;
	user-select: none;
	.carousel-slide {
		cursor: grab;
		width: 100%;
		max-height: 500px;
		&:active {
			cursor: grabbing;
		}
		video {
			width: 100%;
			max-height: 500px;
		}
		img {
			width: 100%;
			max-height: 500px;
		}
	}
	.controller {
		position: absolute;
		bottom: 4px;
		left: 50%;
		transform: translate(-50%, -50%);
		.dot {
			cursor: pointer;
			height: 15px;
			width: 15px;
			background-color: white;
			border: 1px solid black;
			border-radius: 50%;
			display: inline-block;
			&:hover {
				background-color: black;
				border-color: black;
			}
		}
	}
	.modal {
		position: fixed;
		z-index: 1;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: rgba(0, 0, 0, 0.8);
		text-align: center;
		.close {
			width: 85%;
			display: block;
			text-align: right;
			color: white;
			font-size: 28px;
			font-weight: bold;
			&:hover {
				cursor: pointer;
			}
		}
		.video {
			width: 70%;
		}
	}
}
</style>
