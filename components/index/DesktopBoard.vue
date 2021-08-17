<template>
	<div class="desktop-board">
		<div class="container">
			<div class="board-title">Danışma Kurulu</div>
			<div class="grid-container">
				<board-modal imgLink="/img/index/board/erol-sapci.png" name="Erol Sapçı" />
				<board-modal imgLink="/img/index/board/gurkan-kantarci.png" name="Gürkan Kantarcı" />
				<board-modal imgLink="/img/index/board/iskender-ulusay.png" name="İskender Ulusay" />
				<board-modal imgLink="/img/index/board/tanju-ozkonuk.png" name="Tanju Özkonuk" />
				<board-modal imgLink="/img/index/board/yusuf-ziya-yuce.png" name="Yusuf Ziya Yüce" />
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
	padding-bottom: 20px;
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
		grid-template-columns: auto auto auto auto auto;
	}
}
</style>
