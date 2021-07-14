<template>
	<section class="side-page">
		<div class="container">
			<div class="img">
				<nuxt-img src="/img/placeholder.png" alt="" />
			</div>
			<div class="text">
				<h2>{{ $t("team.title") }}</h2>
				<p>{{ $t("team.desc") }}</p>
				<div v-for="item in Object.keys($t('team.content'))" :key="item">
					<h3>{{ item }}</h3>
					<p>{{ $t(`team.content.${item}`) }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	head() {
		return {
			title: this.$i18n.t("team.title"),
			meta: [],
		};
	},
};
</script>

<style lang="scss">
.side-page {
	.img {
		max-height: 300px;
		z-index: -1;
		img {
			max-height: 300px;
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
			position: relative;
			padding: 5px 0px;
			color: #000;
			&::before {
				content: "";
				position: absolute;
				height: 2px;
				width: 75px;
				bottom: 0px;
				left: 0px;
				background: #00ff00;
			}
		}
		h3 {
			font-size: 18px;
			font-weight: 550;
			letter-spacing: 1px;
			text-transform: uppercase;
			position: relative;
			padding: 5px 0px;
			margin: 10px 0px 0px 0px;
			color: #000;
		}
	}
}
</style>
