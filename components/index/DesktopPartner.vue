<template>
	<div class="desktop-partner">
		<div class="container">
			<div class="partner-title">İşbirlikçilerimiz</div>
			<div class="grid-container">
				<supporter-modal imgLink="/img/index/partners/adler.png" />
				<supporter-modal imgLink="/img/index/partners/haci-hasan.png" />
				<supporter-modal imgLink="/img/index/partners/hrpeak.png" />
				<supporter-modal imgLink="/img/index/partners/workinton.png" />
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
	padding-bottom: 40px;
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
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
}
</style>
