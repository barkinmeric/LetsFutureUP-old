<template>
	<div class="mobile-board">
		<div class="container">
			<div class="board-title">{{ $t("index.board.title") }}</div>
			<slider :pagination="true" :arrows="true" :enableClick="true" :autoplay="5000">
				<slider-inner v-for="item in $t('index.board.content')" :key="item.name">
					<board-modal :item="item" />
				</slider-inner>
			</slider>
		</div>
	</div>
</template>

<script>
export default {
	name: "MobileBoard",
};
</script>

<style lang="scss" scoped>
.mobile-board {
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
