<template>
	<div class="desktop-supporter">
		<div class="container">
			<div class="supporter-title">Destekçilerimiz</div>
			<div class="grid-container">
				<supporter-modal imgLink="/img/index/supporters/aktas.png" />
				<supporter-modal imgLink="/img/index/supporters/emek.png" />
				<supporter-modal imgLink="/img/index/supporters/farba.png" />
				<supporter-modal imgLink="/img/index/supporters/feka.png" />
				<supporter-modal imgLink="/img/index/supporters/fki.png" />
				<supporter-modal imgLink="/img/index/supporters/inoksan.png" />
				<supporter-modal imgLink="/img/index/supporters/limakenerji.png" />
				<supporter-modal imgLink="/img/index/supporters/valeo.png" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "DesktopSupporter",
};
</script>

<style lang="scss" scoped>
.desktop-supporter {
	background: #eee;
	color: $mainColor;
	padding-bottom: 40px;
	text-align: center;
	.supporter-title {
		padding: 20px 0px 10px 0px;
		font-size: 22px;
		font-weight: 600;
		display: inline-block;
		border-bottom: 1px solid $mainColor;
		border-bottom-width: 3px;
		padding-bottom: 3px;
	}
	.grid-container {
		padding-top: 10px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
}
</style>
