<template>
	<div class="mobile-supporter">
		<div class="container">
			<div class="supporter-title">{{ $t("index.supporter.title") }}</div>
			<slider :pagination="true" :enableClick="true" :autoplay="5000">
				<slider-inner v-for="image in $t('index.supporter.content')" :key="image">
					<supporter-modal :image="image" />
				</slider-inner>
			</slider>
		</div>
	</div>
</template>

<script>
export default {
	name: "MobileSupporter",
};
</script>

<style lang="scss" scoped>
.mobile-supporter {
	background: #eee;
	color: $mainColor;
	padding-bottom: 40px;
	text-align: center;
	.supporter-title {
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
