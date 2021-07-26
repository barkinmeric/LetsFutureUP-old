<template>
	<div class="newsletter-carousel">
		<VueSlickCarousel v-bind="settings">
			<div
				v-for="item in $t(`${section}.content`)
					.slice()
					.reverse()"
				:key="item.title"
			>
				<newsletter-carousel-card :item="item" :section="section" />
			</div>
		</VueSlickCarousel>
	</div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
	components: { VueSlickCarousel },
	name: "NewsletterCarousel",
	props: {
		section: String,
	},
	data() {
		return {
			deneme: this.section,
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
.newsletter-carousel {
	max-height: 500px;
	img {
		max-height: 500px;
		cursor: grab;
		height: auto;
		width: 100%;
	}
}
</style>
