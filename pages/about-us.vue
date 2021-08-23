<template>
	<section class="about-us">
		<div class="container">
			<div class="head">
				<img class="image" draggable="false" :src="$t('about.img')" alt="" height="1080" width="1920" />
			</div>
			<div class="body">
				<h2 class="title">{{ $t("about.title") }}</h2>
				<div v-for="item in $t('about.content')" :key="item.title">
					<h3>{{ item.title }}</h3>
					<ul v-if="item.title == `HEDEFLERİMİZ` || item.title == 'OUR GOALS'">
						<li v-for="text in item.text" :key="text">
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
			title: this.$i18n.t("about.title"),
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
			margin-bottom: 15px;
		}
		li {
			color: #292929;
			font-size: 16px;
			font-weight: normal;
			margin-bottom: 10px;
		}
		h3 {
			font-size: 18px;
			font-weight: 500;
			letter-spacing: 1px;
			color: #000;
			margin-bottom: 10px;
		}
	}
}
</style>
