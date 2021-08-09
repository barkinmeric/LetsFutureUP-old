<template>
	<div class="newsletter-carousel">
		<div class="title">{{ $t(`${section}.title`) }}</div>
		<carousel :pagination="true">
			<carousel-slider
				class="carousel-slider"
				v-for="item in $t(`${section}.content`)
					.slice()
					.reverse()"
				:key="item.title"
			>
				<newsletter-carousel-card :item="item" :section="section" />
			</carousel-slider>
		</carousel>
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
	margin: 10px;
	text-align: center;
	width: 100%;
	max-height: 500px;
	user-select: none;
	.carousel {
		height: 250px;
	}
	.title {
		display: inline-block;
		padding-top: 15px;
		color: white;
		font-weight: 500;
		font-size: 22px;
		border-bottom: 2px solid $sideColor;
	}
}
@media (max-width: 1399px) {
	.newsletter-carousel {
		.carousel {
			height: 300px;
		}
	}
}
@media (max-width: 1199px) {
	.newsletter-carousel {
		.carousel {
			height: 400px;
		}
	}
}
@media (max-width: 455px) {
	.newsletter-carousel {
		margin: 5px 0;
		.carousel {
			height: 430px;
		}
	}
}
@media (max-width: 379px) {
	.newsletter-carousel {
		.carousel {
			height: 450px;
		}
	}
}
</style>
