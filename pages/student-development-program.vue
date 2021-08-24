<template>
	<section class="student">
		<social-head :title="$t('student.title')" :description="$t('student.desc')" />
		<div class="container">
			<div class="body">
				<h2 class="title">{{ $t("student.title") }}</h2>
				<p class="text">{{ $t("student.desc") }}</p>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	head() {
		return {
			title: `Let's FutureUP ${this.$i18n.t("student.title")} ${this.$i18n.t("url")}`,
			meta: [
				{
					hid: "description",
					name: "description",
					content: this.$i18n.t("student.desc"),
				},
			],
		};
	},
};
</script>

<style lang="scss" scope>
.student {
	margin-bottom: 30px;
	.body {
		.text {
			color: #292929;
			font-size: 16px;
			font-weight: normal;
			margin-bottom: 15px;
		}
		.title {
			display: inline-block;
			font-size: 20px;
			font-weight: 600;
			letter-spacing: 1px;
			color: #000;
			border-bottom: 3px solid $sideColor;
			margin: 20px 0;
			text-transform: uppercase;
		}
	}
}
</style>
