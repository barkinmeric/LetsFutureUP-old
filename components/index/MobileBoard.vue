<template>
	<div class="mobile-board">
		<div class="container">
			<div class="board-title">Danışma Kurulu</div>
			<slider :pagination="true" :arrows="true" :enableClick="true" :autoplay="true">
				<slider-inner>
					<board-modal imgLink="/img/index/board/erol-sapci.png" name="Erol Sapçı" />
				</slider-inner>
				<slider-inner>
					<board-modal imgLink="/img/index/board/gurkan-kantarci.png" name="Gürkan Kantarcı" />
				</slider-inner>
				<slider-inner>
					<board-modal imgLink="/img/index/board/iskender-ulusay.png" name="İskender Ulusay" />
				</slider-inner>
				<slider-inner>
					<board-modal imgLink="/img/index/board/tanju-ozkonuk.png" name="Tanju Özkonuk" />
				</slider-inner>
				<slider-inner>
					<board-modal imgLink="/img/index/board/yusuf-ziya-yuce.png" name="Yusuf Ziya Yüce" />
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
