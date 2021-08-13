<template>
	<div class="hello-career">
		<div class="container">
			<div class="hello-career-title">
				Let's Future<span class="green">UP</span>
				<br />
				<span class="green">{{ $t("hello-career.title") }}</span>
			</div>
			<div class="grid-container">
				<hello-career-card content="hello-career.mentorship" icon="/img/index/icons/mentorship.svg" />
				<hello-career-card content="hello-career.student" icon="/img/index/icons/student.svg" />
				<hello-career-card content="hello-career.wetalk" icon="/img/index/icons/wetalk.svg" />
				<hello-career-card content="hello-career.startup" icon="/img/index/icons/startup.svg" />
				<hello-career-card content="hello-career.adviceup" icon="/img/index/icons/adviceup.svg" />
				<hello-career-card content="hello-career.talentup" icon="/img/index/icons/talentup.svg" />
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
