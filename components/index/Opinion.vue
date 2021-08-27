<template>
	<div class="opinion">
		<div class="container">
			<div class="opinion-title" v-html="$t('index.opinion.title')"></div>
			<slider :pagination="true" :autoplay="15000">
				<slider-inner v-for="item in $t('index.opinion.content')" :key="item.name">
					<opinion-modal :item="item" />
				</slider-inner>
			</slider>
		</div>
	</div>
</template>

<script>
export default {
	name: "Opinion",
};
</script>

<style lang="scss" scoped>
.opinion {
	background: #292929;
	color: #fff;
	padding-bottom: 20px;
	text-align: center;
	.opinion-title {
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
