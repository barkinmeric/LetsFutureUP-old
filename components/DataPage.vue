<template>
	<div class="data-page">
		<div class="container">
			<div class="img">
				<nuxt-img src="/img/placeholder.png" alt="" />
			</div>
			<div class="text">
				<h2>{{ content.title }}</h2>
				<p>{{ content.text }}</p>
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
	.img {
		max-height: 300px;
		z-index: -1;
		img {
			max-height: 300px;
			width: 100%;
			height: auto;
		}
	}
	.text {
		p {
			color: #292929;
			padding: 5px 0px 10px 0px;
			margin: 0px;
			font-size: 16px;
			font-weight: normal;
		}
		h2 {
			font-size: 20px;
			font-weight: 600;
			letter-spacing: 1px;
			text-transform: uppercase;
			position: relative;
			padding: 5px 0px;
			color: #000;
			&::before {
				content: "";
				position: absolute;
				height: 2px;
				width: 75px;
				bottom: 0px;
				left: 0px;
				background: $sideColor;
			}
		}
	}
}
</style>
