<template>
	<div class="e-bulletin-item">
		<div class="e-bulletin-img">
			<a :href="pdfLink" target="_blank"><nuxt-img src="/img/placeholder.png" alt=""/></a>
		</div>
		<div class="e-bulletin-text">{{ pdfName }}</div>
	</div>
</template>

<script>
export default {
	name: "e-bulletin-item",
	props: {
		pdfName: String,
		pdfLink: String,
	},
};
</script>

<style lang="scss" scoped>
.e-bulletin-item {
	padding: 20px;
	.e-bulletin-img {
		border-radius: 10px;
		box-shadow: 0px 0px 5px 1px #292929;
		img {
			width: 100%;
			border-radius: 10px;
			filter: grayscale(100%);
			transition: all ease 0.5s;
			&:hover {
				filter: grayscale(0%);
			}
		}
	}
	.e-bulletin-text {
		text-align: center;
		padding: 10px 0px;
		font-weight: 500;
		font-size: 18px;
	}
}
</style>
