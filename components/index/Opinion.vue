<template>
	<div class="opinion">
		<div class="container">
			<div class="opinion-title">{{ $t("opinion.title") }}</div>
			<slider :pagination="true" :enableClick="true" :autoplay="true">
				<slider-inner v-for="item in Object.keys($t('opinion.content'))" :key="item">
					<opinion-modal :imgLink="`/img/index/board/${toUrl(item)}.png`" :text="$t(`opinion.content.${item}`)" />
				</slider-inner>
			</slider>
		</div>
	</div>
</template>

<script>
export default {
	name: "Opinion",
	methods: {
		toUrl(text) {
			return text
				.toLowerCase()
				.replace(/ /gim, "-")
				.replace(/ğ/gim, "g")
				.replace(/ü/gim, "u")
				.replace(/ş/gim, "s")
				.replace(/ı/gim, "i")
				.replace(/ö/gim, "o")
				.replace(/ç/gim, "c");
		},
	},
};
</script>

<style lang="scss" scoped>
.opinion {
	background: #292929;
	color: #fff;
	padding-bottom: 20px;
	text-align: center;
	.opinion-title {
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
