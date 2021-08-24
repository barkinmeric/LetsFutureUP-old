<template>
	<div class="data-page">
		<div class="container">
			<div class="head">
				<nuxt-img format="jpg" class="image" draggable="false" :src="content.image" :alt="content.title" height="360" width="360" />
			</div>
			<div class="body">
				<h2 class="title">{{ content.title }}</h2>
				<p class="text">{{ content.text }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "DataPage",
	props: {
		content: Object,
	},
};
</script>

<style lang="scss" scoped>
.data-page {
	margin-bottom: 30px;
	.head {
		text-align: center;
		margin: 20px 0;
		.image {
			max-width: 100%;
			height: auto;
		}
	}
	.body {
		.text {
			color: #292929;
			font-size: 16px;
			font-weight: normal;
		}
		.title {
			display: inline-block;
			font-size: 20px;
			font-weight: 600;
			letter-spacing: 1px;
			color: #000;
			border-bottom: 3px solid $sideColor;
			margin-bottom: 20px;
			text-transform: uppercase;
		}
	}
}
</style>
