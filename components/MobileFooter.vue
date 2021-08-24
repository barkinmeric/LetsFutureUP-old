<template>
	<div class="mobile-footer">
		<div class="container">
			<div class="grid-container">
				<div class="footer-fast-menu">
					<h5>{{ $t("nav.us.title") }}</h5>
					<NuxtLink v-for="(item, index) in $t('nav.us.content')" :key="item" :to="localePath(toUrl($t('nav.us.content', 'en')[index]))">
						<h6>{{ item }}</h6>
					</NuxtLink>
				</div>
				<div class="footer-fast-menu">
					<h5>{{ $t("nav.do.title") }}</h5>
					<NuxtLink v-for="(item, index) in $t('nav.do.content')" :key="item" :to="localePath(toUrl($t('nav.do.content', 'en')[index]))">
						<h6>{{ item }}</h6>
					</NuxtLink>
				</div>
				<div class="footer-fast-menu">
					<h5>{{ $t("nav.career.title") }}</h5>
					<NuxtLink v-for="(item, index) in $t('nav.career.content')" :key="item" :to="localePath(toUrl($t('nav.career.content', 'en')[index]))">
						<h6>{{ item }}</h6>
					</NuxtLink>
				</div>
				<div class="social-media-icons">
					<div class="twitter">
						<a href="https://twitter.com/LetsFutureUP" target="_blank" rel="noopener">
							<icon-twitter width="24px" height="24px" color="white" />
						</a>
					</div>
					<div class="instagram">
						<a href="https://www.instagram.com/letsfutureup" target="_blank" rel="noopener">
							<icon-instagram width="24px" height="24px" color="white" />
						</a>
					</div>
					<div class="facebook">
						<a href="https://www.facebook.com/letsfutureup.315" target="_blank" rel="noopener">
							<icon-facebook width="24px" height="24px" color="white" />
						</a>
					</div>
					<div class="linkedin">
						<a href="https://www.linkedin.com/in/let-s-future-up-176a291aa/" target="_blank" rel="noopener">
							<icon-linkedin width="24px" height="24px" color="white" />
						</a>
					</div>
					<div class="youtube">
						<a href="https://www.youtube.com/channel/UCU0m0_xCHakxtQqAH3PztQQ?view_as=subscriber" target="_blank" rel="noopener">
							<icon-youtube width="24px" height="24px" color="white" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MobileFooter",
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

<style lang="scss" scoped>
.mobile-footer {
	width: 100%;
	height: auto;
	background: #292929;
	padding-top: 20px;
	padding-bottom: 10px;
	.container {
		.grid-container {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
			.footer-fast-menu {
				margin: 10px;
				color: #ffffff90;
				font-size: 14px;
				h5 {
					display: inline-block;
					white-space: nowrap;
					color: #fff;
					font-size: 20px;
					font-weight: 700;
					margin-bottom: 10px;
					border-bottom: 1px solid $sideColor;
					border-bottom-width: 3px;
					padding-bottom: 3px;
				}
				h6 {
					font-size: 14px;
					font-weight: 400;
					color: #ffffff90;
					display: block;
					margin-bottom: 2px;
				}
			}
			.social-media-icons {
				margin: 10px auto;
				color: #fff;
				font-size: 20px;
				text-align: center;
				display: flex;
				align-items: center;
				justify-content: space-between;
				div {
					margin: 0px 2.5px;
					width: 40px;
					height: 40px;
					text-align: center;
					border-radius: 100%;
					cursor: pointer;
					a {
						color: #fff;
						display: flex;
						align-items: center;
						justify-content: center;
						height: 100%;
					}
				}
				div.facebook {
					background: #3b5998;
				}
				div.instagram {
					background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%);
				}
				div.twitter {
					background: #00acee;
				}

				div.linkedin {
					background: #0e76a8;
				}

				div.youtube {
					background: #c4302b;
				}
			}
		}
	}
}
</style>
