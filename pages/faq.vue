<template>
	<section class="faq">
		<social-head :title="$t('faq.title')" :description="$t('index.desc')" />
		<div class="container">
			<div class="head">
				<nuxt-img format="jpg" class="image" draggable="false" :src="$t('faq.img')" :alt="$t('faq.title')" height="500" width="1920" />
			</div>
			<div class="body">
				<h2 class="title">{{ $t("faq.title") }}</h2>
				<div v-for="item in $t('faq.content')" :key="item.title">
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
			title: `Let's FutureUP ${this.$i18n.t("faq.title")} ${this.$i18n.t("url")}`,
			meta: [
				{
					hid: "description",
					name: "description",
					content: this.$i18n.t("index.desc"),
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.faq {
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
			margin-bottom: 20px;
		}
		.item-title {
			font-size: 18px;
			font-weight: 700;
			letter-spacing: 1px;
			color: #000;
			margin-bottom: 10px;
			text-transform: uppercase;
		}
	}
}
</style>
