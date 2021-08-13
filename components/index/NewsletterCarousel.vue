<template>
	<div class="newsletter-carousel">
		<NuxtLink :to="localePath(toUrl($t(`${section}.title`, 'en')))">
			<div class="title">{{ $t(`${section}.title`) }}</div>
		</NuxtLink>
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
	methods: {
		toUrl(text) {
			return text
				.toLowerCase()
				.replace(/ /gim, "-")
				.replace(/ğ/gim, "g")
				.replace(/ü/gim, "u")
				.replace(/ş/gim, "s")
				.replace(/ı/gim, "i")
				.replace(/ö/gim, "o")
				.replace(/ç/gim, "c");
		},
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
