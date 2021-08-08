<template>
	<div class="desktop-board">
		<div class="container">
			<div class="board-title">Danışma Kurulu</div>
			<div class="grid-container">
				<board-modal />
				<board-modal />
				<board-modal />
				<board-modal />
				<board-modal />
				<board-modal />
				<board-modal />
				<board-modal />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "DesktopBoard",
};
</script>

<style lang="scss" scoped>
.desktop-board {
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
	.grid-container {
		display: grid;
		grid-template-columns: auto auto auto auto;
	}
}
</style>
