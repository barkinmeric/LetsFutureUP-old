<template>
	<section class="project-team">
		<social-head :title="$t('team.title')" :description="$t('team.desc')" />
		<div class="container">
			<div class="head">
				<nuxt-img format="jpg" class="image" draggable="false" :src="$t('team.img')" :alt="$t('team.title')" height="500" width="1920" />
			</div>
			<div class="body">
				<h2 class="title">{{ $t("team.title") }}</h2>
				<p class="text">{{ $t("team.desc") }}</p>
				<div v-for="item in $t('team.content')" :key="item.title">
					<team-collapsible :item="item" />
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
			title: `Let's FutureUP ${this.$i18n.t("team.title")} ${this.$i18n.t("url")}`,
			meta: [
				{
					hid: "description",
					name: "description",
					content: this.$i18n.t("team.desc"),
				},
			],
		};
	},
};
</script>

<style lang="scss" scope>
.project-team {
	margin-bottom: 30px;
	.head {
		text-align: center;
		margin: 20px 0;
		.image {
			max-width: 100%;
			height: auto;
		}
	}
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
			font-size: 14px;
			font-weight: normal;
			margin: 20px 0;
		}
	}
}
</style>
