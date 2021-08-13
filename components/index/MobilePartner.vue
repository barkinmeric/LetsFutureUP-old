<template>
	<div class="mobile-partner">
		<div class="container">
			<div class="partner-title">İşbirlikçilerimiz</div>
			<slider :pagination="true" :enableClick="true">
				<slider-inner>
					<supporter-modal imgLink="/img/index/partners/adler.png" />
				</slider-inner>
				<slider-inner>
					<supporter-modal imgLink="/img/index/partners/haci-hasan.png" />
				</slider-inner>
				<slider-inner>
					<supporter-modal imgLink="/img/index/partners/hrpeak.png" />
				</slider-inner>
				<slider-inner>
					<supporter-modal imgLink="/img/index/partners/workinton.png" />
				</slider-inner>
			</slider>
		</div>
	</div>
</template>

<script>
export default {
	name: "MobilePartner",
};
</script>

<style lang="scss" scoped>
.mobile-partner {
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
}
</style>
