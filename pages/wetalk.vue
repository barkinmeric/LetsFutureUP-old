<template>
	<section class="wetalk">
		<social-head :title="$t('wetalk.title')" :description="$t('wetalk.desc')" />
		<div class="container">
			<div class="body">
				<h2 class="title">{{ $t("wetalk.title") }}</h2>
				<p class="text">{{ $t("wetalk.desc") }}</p>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	head() {
		return {
			title: `Let's FutureUP ${this.$i18n.t("wetalk.title")} ${this.$i18n.t("url")}`,
			meta: [
				{
					hid: "description",
					name: "description",
					content: this.$i18n.t("wetalk.desc"),
				},
			],
		};
	},
};
</script>

<style lang="scss" scope>
.wetalk {
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
