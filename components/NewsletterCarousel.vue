<template>
	<div class="newsletter-carousel" @mousedown="setDesktopCurrentX($event)" @mouseup="checkDesktopSlide($event)" @touchstart="setMobileCurrentX($event)" @touchend="checkMobileSlide($event)" tabindex="0">
		<div class="title">{{ $t(`${section}.title`) }}</div>
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
			<span @click.prevent="prev" class="btn btn-prev">&#9664;</span>
			<span @click.prevent="next" class="btn btn-next">&#9654;</span>
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
	background: #12203c;
	border-radius: 10px;
	margin: 10px;
	position: relative;
	text-align: center;
	width: 100%;
	max-height: 500px;
	user-select: none;
	.title {
		display: inline-block;
		padding-top: 15px;
		color: white;
		font-weight: 500;
		font-size: 22px;
		border-bottom: 2px solid $sideColor;
	}
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
		bottom: -20px;
		left: 50%;
		transform: translate(-50%, -50%);
		.btn {
			margin: 0 2px;
			cursor: pointer;
			font-size: 30px;
			color: white;
			&:hover {
				color: black;
			}
		}
	}
}
</style>
