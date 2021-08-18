<template>
	<div class="mentorship-collapsible-item">
		<div class="container">
			<div class="title">ASDASFA</div>
			<div class="flex-container">
				<mentorship-modal />
				<mentorship-modal />
				<mentorship-modal />
				<mentorship-modal />
				<mentorship-modal />
				<mentorship-modal />
				<mentorship-modal />
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mentorship-collapsible-item {
	text-align: center;
	.title {
		display: inline-block;
		padding-top: 15px;
		color: black;
		font-weight: 500;
		font-size: 22px;
		border-bottom: 2px solid $sideColor;
	}
	.flex-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
}
</style>
