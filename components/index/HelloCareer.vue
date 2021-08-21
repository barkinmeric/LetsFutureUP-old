<template>
	<div class="hello-career">
		<div class="container">
			<div class="hello-career-title">
				<h1>Let's Future<span class="green">UP</span></h1>
				<h2 class="green">{{ $t("index.hello-career.title") }}</h2>
			</div>
			<div class="grid-container">
				<hello-career-card content="index.hello-career.mentorship" icon="mentorship" />
				<hello-career-card content="index.hello-career.student" icon="student" />
				<hello-career-card content="index.hello-career.wetalk" icon="wetalk" />
				<hello-career-card content="index.hello-career.startup" icon="startup" />
				<hello-career-card content="index.hello-career.adviceup" icon="adviceup" />
				<hello-career-card content="index.hello-career.talentup" icon="talentup" />
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
			font-size: 26px;
			font-weight: 600;
		}
		h2 {
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
