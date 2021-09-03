<template>
	<div class="hello-career">
		<div class="container">
			<div class="hello-career-title">
				<h1>Let's Future<span class="green">UP</span></h1>
				<h2 class="green">{{ $t("index.hello-career.title") }}</h2>
			</div>
			<div class="grid-container">
				<hello-career-card v-for="(item, index) in $t('index.hello-career.content')" :key="item.title" :item="item" :index="index" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "HelloCareer",
};
</script>

<style lang="scss" scoped>
.hello-career {
	padding: 20px 0px 10px 0px;
	background: #12203c;
	.hello-career-title {
		padding: 10px 0px 20px 0px;
		color: #fff;
		text-align: center;
		h1 {
			margin: 0;
			font-size: 26px;
			font-weight: 600;
		}
		h2 {
			margin: 0;
			font-size: 26px;
			font-weight: 600;
		}
		.green {
			color: $sideColor;
		}
	}
	.grid-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		column-gap: 20px;
	}
}
</style>
