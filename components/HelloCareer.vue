<template>
	<div class="hello-career">
		<div class="container">
			<div class="hello-career-title">
				Let's Future<span class="green">UP</span>
				<br />
				<span class="green">{{ $t("hello-career.title") }}</span>
			</div>
			<div class="grid-container">
				<hello-career-card content="hello-career.mentorship" />
				<hello-career-card content="hello-career.student" />
				<hello-career-card content="hello-career.wetalk" />
				<hello-career-card content="hello-career.startup" />
				<hello-career-card content="hello-career.adviceup" />
				<hello-career-card content="hello-career.talentup" />
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
		font-size: 26px;
		font-weight: 600;
		color: #fff;
		text-align: center;
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
