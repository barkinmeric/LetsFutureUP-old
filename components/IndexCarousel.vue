<template>
	<div class="index-carousel">
		<carousel :pagination="true">
			<carousel-slider class="carousel-slider">
				<div class="modalContainer" @click="showModal = true">
					<nuxt-img draggable="false" src="/img/carousel/carousel1.jpg" alt="carousel1" />
				</div>
			</carousel-slider>
			<carousel-slider class="carousel-slider">
				<nuxt-img draggable="false" src="/img/carousel/carousel2.png" alt="carousel2" />
			</carousel-slider>
			<carousel-slider class="carousel-slider">
				<nuxt-img draggable="false" src="/img/carousel/carousel3.png" alt="carousel3" />
			</carousel-slider>
		</carousel>
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
			showModal: false,
		};
	},
};
</script>

<style lang="scss" scoped>
.index-carousel {
	.carousel {
		height: 500px;
		.carousel-slider {
			.modalContainer {
				cursor: pointer;
				height: 100%;
				width: 100%;
			}

			img {
				height: 100%;
				width: 100%;
			}
		}
	}

	.modal {
		position: fixed;
		z-index: 15;
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
@media (max-width: 1192px) {
	.index-carousel {
		.carousel {
			height: 400px;
		}
	}
}
@media (max-width: 922px) {
	.index-carousel {
		.carousel {
			height: 300px;
		}
	}
}
@media (max-width: 620px) {
	.index-carousel {
		.carousel {
			height: 200px;
		}
	}
}
</style>
