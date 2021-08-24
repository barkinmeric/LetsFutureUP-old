<template>
	<section class="about-us">
		<social-head :title="$t('about.title')" :description="$t('index.desc')" />
		<div class="container">
			<div class="head">
				<nuxt-img class="image" draggable="false" :src="$t('about.img')" alt="" height="500" width="1920" />
			</div>
			<div class="body">
				<h2 class="title">{{ $t("about.title") }}</h2>
				<div v-for="item in $t('about.content')" :key="item.title">
					<h3 class="item-title">{{ item.title }}</h3>
					<ul v-if="item.title == `Hedeflerimiz` || item.title == 'Our goals'">
						<li class="item-text" v-for="text in item.text" :key="text">
							{{ text }}
						</li>
					</ul>
					<p class="text" v-else>{{ item.text }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	head() {
		return {
			title: `Let's FutureUP ${this.$i18n.t("about.title")} ${this.$i18n.t("url")}`,
			meta: [],
		};
	},
};
</script>

<style lang="scss" scoped>
.about-us {
	margin-bottom: 30px;
	.head {
		text-align: center;
		margin-bottom: 20px;
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
