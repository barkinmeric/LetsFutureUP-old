<template>
	<div class="newsletter-carousel" @mousedown="setDesktopCurrentX($event)" @mouseup="checkDesktopSlide($event)" @touchstart="setMobileCurrentX($event)" @touchend="checkMobileSlide($event)" tabindex="0">
		<div
			class="carousel-slide"
			v-for="(item, index) in $t(`${section}.content`)
				.slice()
				.reverse()"
			:key="item.title"
			v-show="carouselIndex == index"
		>
			<newsletter-carousel-card :item="item" :section="section" />
		</div>
		<div class="controller">
			<span v-for="i in slidesLength" :key="i" @click="carouselIndex = i - 1" class="dot" :style="carouselIndex == i - 1 ? 'background-color:black;' : 'border-color:white;'"></span>
		</div>
	</div>
</template>

<script>
export default {
	name: "NewsletterCarousel",
	props: {
		section: String,
	},

	data() {
		return {
			carouselIndex: 0,
			slidesLength: this.$t(`${this.section}.content`).length,
			currentX: 0,
			showModal: false,
		};
	},

	mounted: function() {
		window.setInterval(() => this.next(), 5000);
	},

	methods: {
		next() {
			this.carouselIndex++;
			if (this.carouselIndex >= this.slidesLength) {
				this.carouselIndex = 0;
			}
		},
		prev() {
			this.carouselIndex--;
			if (this.carouselIndex < 0) {
				this.carouselIndex = this.slidesLength - 1;
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
.newsletter-carousel {
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
			margin: 0 2px;
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
}
</style>
