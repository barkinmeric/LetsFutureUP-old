<template>
	<section class="faq">
		<div class="container">
			<div class="img">
				<nuxt-img draggable="false" :src="$t('faq.img')" alt="" />
			</div>
			<div class="text">
				<h2>{{ $t("faq.title") }}</h2>
				<div v-for="item in $t('faq.content')" :key="item.title">
					<h3>{{ item.title }}</h3>
					<p>{{ item.text }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	head() {
		return {
			title: this.$i18n.t("faq.title"),
			meta: [],
		};
	},
};
</script>

<style lang="scss" scoped>
.faq {
	margin-bottom: 10px;
	.img {
		z-index: -1;
		img {
			width: 100%;
			height: auto;
		}
	}
	.text {
		p {
			color: #292929;
			padding: 5px 0px 10px 0px;
			margin: 0px;
			font-size: 16px;
			font-weight: normal;
		}
		h2 {
			font-size: 20px;
			font-weight: 600;
			letter-spacing: 1px;
			padding: 5px 0px;
			color: #000;
			display: inline-block;
			margin-bottom: 10px;
			border-bottom: 1px solid $sideColor;
			border-bottom-width: 3px;
		}
		h3 {
			font-size: 18px;
			font-weight: 550;
			letter-spacing: 1px;
			text-transform: uppercase;
			position: relative;
			padding: 5px 0px;
			margin: 10px 0px 0px 0px;
			color: #000;
		}
	}
}
</style>
