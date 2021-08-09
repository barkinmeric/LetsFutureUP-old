<template>
	<div class="mobile-board">
		<div class="container">
			<div class="board-title">Danışma Kurulu</div>
			<slider :pagination="true" :enableClick="true">
				<slider-inner v-for="i in 8" :key="i">
					<board-modal />
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
