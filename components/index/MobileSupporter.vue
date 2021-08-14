<template>
	<div class="mobile-supporter">
		<div class="container">
			<div class="supporter-title">Destekçilerimiz</div>
			<slider :pagination="true" :enableClick="true" :autoplay="true">
				<slider-inner>
					<supporter-modal imgLink="/img/index/supporters/aktas.png" />
				</slider-inner>
				<slider-inner>
					<supporter-modal imgLink="/img/index/supporters/emek.png" />
				</slider-inner>
				<slider-inner>
					<supporter-modal imgLink="/img/index/supporters/farba.png" />
				</slider-inner>
				<slider-inner>
					<supporter-modal imgLink="/img/index/supporters/feka.png" />
				</slider-inner>
				<slider-inner>
					<supporter-modal imgLink="/img/index/supporters/fki.png" />
				</slider-inner>
				<slider-inner>
					<supporter-modal imgLink="/img/index/supporters/inoksan.png" />
				</slider-inner>
				<slider-inner>
					<supporter-modal imgLink="/img/index/supporters/limakenerji.png" />
				</slider-inner>
				<slider-inner>
					<supporter-modal imgLink="/img/index/supporters/valeo.png" />
				</slider-inner>
			</slider>
		</div>
	</div>
</template>

<script>
export default {
	name: "MobileSupporter",
};
</script>

<style lang="scss" scoped>
.mobile-supporter {
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
	.slider-inner {
		margin-bottom: 12px;
		padding-top: 5px;
	}
}
</style>
