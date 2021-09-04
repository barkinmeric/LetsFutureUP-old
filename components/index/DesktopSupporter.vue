<template>
	<div class="desktop-supporter">
		<div class="container">
			<div class="supporter-title">{{ $t("index.supporter.title") }}</div>
			<div class="flex-container">
				<supporter-modal v-for="image in $t('index.supporter.content')" :key="image" :image="image" />
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
	padding-bottom: 20px;
	text-align: center;
	.supporter-title {
		padding: 20px 0px 10px 0px;
		font-size: 22px;
		font-weight: 600;
		display: inline-block;
		border-bottom: 1px solid $sideColor;
		border-bottom-width: 3px;
		padding-bottom: 3px;
	}
	.flex-container {
		padding-top: 10px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
}
</style>
