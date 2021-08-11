<template>
	<div class="mobile-board">
		<div class="container">
			<div class="board-title">Danışma Kurulu</div>
			<slider :pagination="true" :enableClick="true">
				<slider-inner>
					<board-modal imgLink="/img/danisma-kurulu/erol-sapci.png" name="Erol Sapçı" />
				</slider-inner>
				<slider-inner>
					<board-modal imgLink="/img/danisma-kurulu/gurkan-kantarci.png" name="Gürkan Kantarcı" />
				</slider-inner>
				<slider-inner>
					<board-modal imgLink="/img/danisma-kurulu/iskender-ulusay.png" name="İskender Ulusay" />
				</slider-inner>
				<slider-inner>
					<board-modal imgLink="/img/danisma-kurulu/tanju-ozkonuk.jpg" name="Tanju Özkonuk" />
				</slider-inner>
				<slider-inner>
					<board-modal imgLink="/img/danisma-kurulu/yusuf-ziya-yuce.jpg" name="Yusuf Ziya Yüce" />
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
