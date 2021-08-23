<template>
	<section class="our-story">
		<div class="container">
			<div class="img">
				<nuxt-img draggable="false" :src="$t('story.img')" alt="" />
			</div>
			<div class="text">
				<h2>{{ $t("story.title") }}</h2>
				<p v-for="paragraph in $t('story.content')" :key="paragraph">{{ paragraph }}</p>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	head() {
		return {
			title: this.$i18n.t("story.title"),
			meta: [],
		};
	},
};
</script>

<style lang="scss" scoped>
.our-story {
	margin-bottom: 10px;
	.img {
		z-index: -1;
		img {
			width: 100%;
			height: auto;
		}
	}
	.text {
		p {
			color: #292929;
			padding: 5px 0px 10px 0px;
			margin: 0px;
			font-size: 16px;
			font-weight: normal;
		}
		h2 {
			font-size: 20px;
			font-weight: 600;
			letter-spacing: 1px;
			padding: 5px 0px;
			color: #000;
			display: inline-block;
			margin-bottom: 10px;
			border-bottom: 1px solid $sideColor;
			border-bottom-width: 3px;
		}
	}
}
</style>
