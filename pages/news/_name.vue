<template>
	<section class="side-page">
		<div class="container">
			<div class="img">
				<nuxt-picture src="/img/placeholder.png" alt="" />
			</div>
			<div class="text">
				<h2>{{ data.title }}</h2>
				<p>{{ data.text }}</p>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	head() {
		return {
			title: this.data.title,
			meta: [],
		};
	},
	data() {
		return {
			data: this.$i18n.t("news.content").filter((item) => this.toUrl(item.title) == this.$route.params.name)[0],
		};
	},
	methods: {
		toUrl(text) {
			return text
				.toLowerCase()
				.replace(/ /gim, "-")
				.replace(/ğ/gim, "g")
				.replace(/ü/gim, "u")
				.replace(/ş/gim, "s")
				.replace(/ı/gim, "i")
				.replace(/ö/gim, "o")
				.replace(/ç/gim, "c");
		},
	},
};
</script>

<style lang="scss">
.side-page {
	.container {
		width: 100%;
		padding-right: 0.75rem;
		padding-left: 0.75rem;
		margin-right: auto;
		margin-left: auto;
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
}
</style>
