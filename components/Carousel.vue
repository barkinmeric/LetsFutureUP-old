<template>
	<div class="carousel">
		<VueSlickCarousel v-bind="settings">
			<div>
				<video controls height="500vw" width="100%">
					<source src="/videos/tr.mp4" type="video/mp4" />
				</video>
			</div>
			<div><nuxt-img draggable="false" src="/img/placeholder.png" alt="" /></div>
			<div><nuxt-img draggable="false" src="/img/placeholder.png" alt="" /></div>
		</VueSlickCarousel>
	</div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
	components: { VueSlickCarousel },
	data() {
		return {
			settings: {
				arrows: false,
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 2000,
			},
		};
	},
};
</script>

<style lang="scss" scoped>
.carousel {
	max-height: 500px;
	img {
		max-height: 500px;
		cursor: grab;
		height: auto;
		width: 100%;
	}
}
</style>
