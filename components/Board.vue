<template>
	<div class="board">
		<div class="container">
			<div class="board-title">Danışma Kurulu</div>
			<VueSlickCarousel v-bind="settings">
				<div><board-modal /></div>
				<div><board-modal /></div>
				<div><board-modal /></div>
				<div><board-modal /></div>
				<div><board-modal /></div>
				<div><board-modal /></div>
				<div><board-modal /></div>
				<div><board-modal /></div>
			</VueSlickCarousel>
		</div>
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
				dots: true,
				arrows: false,
				slidesToShow: 4,
				slidesToScroll: 4,
				rows: 2,
				infinite: false,
				responsive: [
					{
						breakpoint: 992,
						settings: {
							infinite: true,
							slidesToShow: 1,
							slidesToScroll: 1,
							rows: 1,
							adaptiveHeight: true,
						},
					},
				],
			},
		};
	},
};
</script>

<style lang="scss" scoped>
.board {
	background: #292929;
	color: #fff;
	padding-bottom: 40px;
	text-align: center;
	.board-title {
		padding: 20px 0px 10px 0px;
		font-size: 22px;
		font-weight: 600;
		display: inline-block;
		border-bottom: 1px solid $sideColor;
		border-bottom-width: 3px;
		padding-bottom: 3px;
	}
}
</style>
