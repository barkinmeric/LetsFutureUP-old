<template>
	<div class="newsletter-carousel">
		<div class="title">{{ $t(`${section}.title`) }}</div>
		<slider :pagination="true" :enableClick="true">
			<slider-inner
				v-for="item in $t(`${section}.content`)
					.slice()
					.reverse()"
				:key="item.title"
			>
				<newsletter-carousel-card :item="item" :section="section" />
			</slider-inner>
		</slider>
	</div>
</template>

<script>
export default {
	name: "NewsletterCarousel",
	props: {
		section: String,
	},
};
</script>

<style lang="scss" scoped>
.newsletter-carousel {
	background: #12203c;
	border-radius: 10px;
	margin: 10px 0;
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
}
</style>
