<template>
	<div class="mobile-partner">
		<div class="container">
			<div class="partner-title">{{ $t("index.partner.title") }}</div>
			<slider :pagination="true" :enableClick="true" :autoplay="5000">
				<slider-inner v-for="image in $t('index.partner.content')" :key="image">
					<partner-modal :image="image" />
				</slider-inner>
			</slider>
		</div>
	</div>
</template>

<script>
export default {
	name: "MobilePartner",
};
</script>

<style lang="scss" scoped>
.mobile-partner {
	background: #eee;
	color: $mainColor;
	padding-bottom: 40px;
	text-align: center;
	.partner-title {
		padding: 20px 0px 10px 0px;
		font-size: 22px;
		font-weight: 600;
		display: inline-block;
		border-bottom: 1px solid $sideColor;
		border-bottom-width: 3px;
		padding-bottom: 3px;
	}
	.slider-inner {
		margin-bottom: 12px;
		padding-top: 5px;
	}
}
</style>
