<template>
	<div class="desktop-footer">
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
	name: "DesktopFooter",
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
.desktop-footer {
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
					margin-bottom: 2px;
					display: block;
					color: #ffffff90;
					transition: all ease 0.4s;
					&:hover {
						color: #00ff00;
						margin-left: 10px;
					}
				}
			}
			.social-media-icons {
				margin: 10px auto;
				color: #fff;
				font-size: 20px;
				display: flex;
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
					position: relative;
					&:hover {
						animation: facebook 1s infinite;
						&::before {
							opacity: 1;
							bottom: -30px;
							z-index: 1;
						}
					}
					&::before {
						opacity: 0;
						z-index: -1;
						font-size: 8px;
						letter-spacing: 0px !important;
						white-space: nowrap;
						content: "Let's FutureUP";
						position: absolute;
						background: #3b5998;
						width: 100px;
						height: 20px;
						line-height: 20px;
						border-radius: 20px;
						bottom: -50px;
						left: -75%;
						transition: all ease 0.4s;
					}
				}
				div.instagram {
					background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%);
					position: relative;
					&:hover {
						animation: instagram 1s infinite;
						&::before {
							opacity: 1;
							bottom: -30px;
							z-index: 1;
						}
					}
					&::before {
						opacity: 0;
						z-index: -1;
						font-size: 8px;
						letter-spacing: 0px !important;
						white-space: nowrap;
						content: "Let's FutureUP";
						position: absolute;
						background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%);
						width: 100px;
						height: 20px;
						line-height: 20px;
						border-radius: 20px;
						bottom: -50px;
						left: -75%;
						transition: all ease 0.4s;
					}
				}
				div.twitter {
					background: #00acee;
					position: relative;
					&:hover {
						animation: twitter 1s infinite;
						&::before {
							opacity: 1;
							bottom: -30px;
							z-index: 1;
						}
					}
					&::before {
						opacity: 0;
						z-index: -1;
						font-size: 8px;
						letter-spacing: 0px !important;
						white-space: nowrap;
						content: "Let's FutureUP";
						position: absolute;
						background: #00acee;
						width: 100px;
						height: 20px;
						line-height: 20px;
						border-radius: 20px;
						bottom: -50px;
						left: -75%;
						transition: all ease 0.4s;
					}
				}

				div.linkedin {
					background: #0e76a8;
					position: relative;
					&:hover {
						animation: linkedin 1s infinite;
						&::before {
							opacity: 1;
							bottom: -30px;
							z-index: 1;
						}
					}
					&::before {
						opacity: 0;
						z-index: -1;
						font-size: 8px;
						letter-spacing: 0px !important;
						white-space: nowrap;
						content: "Let's FutureUP";
						position: absolute;
						background: #0e76a8;
						width: 100px;
						height: 20px;
						line-height: 20px;
						border-radius: 20px;
						bottom: -50px;
						left: -75%;
						transition: all ease 0.4s;
					}
				}

				div.youtube {
					background: #c4302b;
					position: relative;
					&:hover {
						animation: youtube 1s infinite;
						&::before {
							opacity: 1;
							bottom: -30px;
							z-index: 1;
						}
					}
					&::before {
						opacity: 0;
						z-index: -1;
						font-size: 8px;
						letter-spacing: 0px !important;
						white-space: nowrap;
						content: "Let's FutureUP";
						position: absolute;
						background: #c4302b;
						width: 100px;
						height: 20px;
						line-height: 20px;
						border-radius: 20px;
						bottom: -50px;
						left: -75%;
						transition: all ease 0.4s;
					}
				}
			}
		}
	}
}

@keyframes instagram {
	0% {
		box-shadow: 0px 0px 0px 0px rgba(131, 58, 180, 0.7);
	}
	70% {
		box-shadow: 0px 0px 0px 10px rgba(131, 58, 180, 0);
	}
	100% {
		box-shadow: 0px 0px 0px 0px rgba(131, 58, 180, 0);
	}
}

@keyframes facebook {
	0% {
		box-shadow: 0px 0px 0px 0px rgba(59, 89, 152, 0.7);
	}
	70% {
		box-shadow: 0px 0px 0px 10px rgba(59, 89, 152, 0);
	}
	100% {
		box-shadow: 0px 0px 0px 0px rgba(59, 89, 152, 0);
	}
}

@keyframes twitter {
	0% {
		box-shadow: 0px 0px 0px 0px rgba(0, 172, 238, 0.7);
	}
	70% {
		box-shadow: 0px 0px 0px 10px rgba(0, 172, 238, 0);
	}
	100% {
		box-shadow: 0px 0px 0px 0px rgba(0, 172, 238, 0);
	}
}

@keyframes linkedin {
	0% {
		box-shadow: 0px 0px 0px 0px rgba(14, 118, 168, 0.7);
	}
	70% {
		box-shadow: 0px 0px 0px 10px rgba(14, 118, 168, 0);
	}
	100% {
		box-shadow: 0px 0px 0px 0px rgba(14, 118, 168, 0);
	}
}

@keyframes youtube {
	0% {
		box-shadow: 0px 0px 0px 0px rgba(196, 48, 43, 0.7);
	}
	70% {
		box-shadow: 0px 0px 0px 10px rgba(196, 48, 43, 0);
	}
	100% {
		box-shadow: 0px 0px 0px 0px rgba(196, 48, 43, 0);
	}
}
</style>
