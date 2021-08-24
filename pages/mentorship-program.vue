<template>
	<section class="mentorship-program">
		<div class="container">
			<mentorship-collapsible />
			<div class="body">
				<h2 class="title">{{ $t("mentorship.title") }}</h2>
				<p class="text">{{ $t("mentorship.desc") }}</p>
				<div v-for="item in $t('mentorship.content')" :key="item.title">
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
			meta: [],
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
			margin-bottom: 20px;
			text-transform: uppercase;
		}
		.item-text {
			color: #292929;
			font-size: 16px;
			font-weight: normal;
			margin-bottom: 15px;
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
