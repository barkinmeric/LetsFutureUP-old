<template>
	<section class="mentorship-program">
		<social-head :title="$t('mentorship.title')" :description="$t('mentorship.desc')" />
		<div class="container">
			<mentorship-collapsible year="2020-2021" />
			<mentorship-collapsible year="2021-2022" />
			<div class="body">
				<h2 class="title">{{ $t("mentorship.title") }}</h2>
				<p class="text">{{ $t("mentorship.desc") }}</p>
				<div class="whatDiv" v-for="item in $t('mentorship.content')" :key="item.title">
					<h3 class="item-title">{{ item.title }}</h3>
					<p class="item-text">{{ item.text }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	head() {
		return {
			title: `Let's FutureUP ${this.$i18n.t("mentorship.title")} ${this.$i18n.t("url")}`,
			meta: [
				{
					hid: "description",
					name: "description",
					content: this.$i18n.t("mentorship.desc"),
				},
			],
		};
	},
};
</script>

<style lang="scss" scope>
.mentorship-program {
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
			margin-bottom: 15px;
			text-transform: uppercase;
		}
		.whatDiv {
			margin: 30px 0;
			.item-text {
				color: #292929;
				font-size: 16px;
				font-weight: normal;
				margin-bottom: 10px;
			}
			.item-title {
				font-size: 18px;
				font-weight: 500;
				letter-spacing: 1px;
				color: #000;
				margin-bottom: 10px;
				text-transform: uppercase;
			}
		}
	}
}
</style>
