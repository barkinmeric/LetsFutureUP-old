<template>
	<div class="desktop-partner">
		<div class="container">
			<div class="partner-title">İşbirlikçilerimiz</div>
			<div class="grid-container">
				<partner-modal imgLink="/img/index/partners/adler.png" />
				<partner-modal imgLink="/img/index/partners/haci-hasan.png" />
				<partner-modal imgLink="/img/index/partners/hrpeak.png" />
				<partner-modal imgLink="/img/index/partners/workinton.png" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "DesktopPartner",
};
</script>

<style lang="scss" scoped>
.desktop-partner {
	background: #eee;
	color: $mainColor;
	padding-bottom: 20px;
	text-align: center;
	.partner-title {
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
