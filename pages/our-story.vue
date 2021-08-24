<template>
	<section class="our-story">
		<social-head :title="$t('story.title')" :description="$t('index.desc')" />
		<div class="container">
			<div class="head">
				<nuxt-img format="jpg" class="image" draggable="false" :src="$t('story.img')" :alt="$t('story.title')" height="500" width="1920" />
			</div>
			<div class="body">
				<h2 class="title">{{ $t("story.title") }}</h2>
				<p class="text" v-for="paragraph in $t('story.content')" :key="paragraph">{{ paragraph }}</p>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	head() {
		return {
			title: `Let's FutureUP ${this.$i18n.t("story.title")} ${this.$i18n.t("url")}`,
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
.our-story {
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
			margin-bottom: 10px;
		}
		.title {
			display: inline-block;
			font-size: 20px;
			font-weight: 600;
			letter-spacing: 1px;
			color: #000;
			border-bottom: 3px solid $sideColor;
			margin-bottom: 10px;
			text-transform: uppercase;
		}
	}
}
</style>
