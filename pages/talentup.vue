<template>
	<section class="talentup">
		<social-head :title="$t('talentup.title')" :description="$t('talentup.content')[0].text[0]" />
		<div class="container">
			<div class="body">
				<h2 class="title">{{ $t("talentup.title") }}</h2>
				<div v-for="item in $t('talentup.content')" :key="item.title">
					<h3 class="item-title">{{ item.title }}</h3>
					<p class="item-text" v-for="text in item.text" :key="text">{{ text }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	head() {
		return {
			title: `Let's FutureUP ${this.$i18n.t("talentup.title")} ${this.$i18n.t("url")}`,
			meta: [
				{
					hid: "description",
					name: "description",
					content: this.$i18n.t("talentup.content")[0].text[0],
				},
			],
		};
	},
};
</script>

<style lang="scss" scope>
.talentup {
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
</style>
