<template>
	<section class="about-us">
		<div class="container">
			<div class="img">
				<nuxt-img draggable="false" :src="$t('about.img')" alt="" />
			</div>
			<div class="text">
				<h2>{{ $t("about.title") }}</h2>
				<div v-for="item in $t('about.content')" :key="item.title">
					<h3>{{ item.title }}</h3>
					<ul v-if="item.title == `HEDEFLERİMİZ` || item.title == 'OUR GOALS'">
						<li v-for="text in item.text" :key="text">
							{{ text }}
						</li>
					</ul>
					<p v-else>{{ item.text }}</p>
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
		ul {
			padding: 0px;
		}
		h2 {
			font-size: 20px;
			font-weight: 600;
			letter-spacing: 1px;
			text-transform: uppercase;
			padding: 5px 0px;
			color: #000;
			display: inline-block;
			margin-bottom: 10px;
			border-bottom: 1px solid $sideColor;
			border-bottom-width: 3px;
		}
		h3 {
			font-size: 18px;
			font-weight: 550;
			letter-spacing: 1px;
			text-transform: uppercase;
			padding: 5px 0px;
			margin: 10px 0px 0px 0px;
			color: #000;
		}
	}
}
</style>
