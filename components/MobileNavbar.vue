<template>
	<div class="mobile-navbar">
		<div class="col-lg-2 logo">
			<NuxtLink :to="`/${this.$i18n.locale}`"><nuxt-picture src="/img/placeholder.png" alt=""/></NuxtLink>
		</div>

		<div class="mobile-menu-button" @click="openMobileMenu">
			<icon-base icon-name="bars" width="32px" height="32px" iconColor="black" iconViewBox="0 0 448 512"><icon-bars /></icon-base>
		</div>
		<div class="mobile-menu" :class="{ active: isMobileMenuActive }">
			<div class="mobile-logo">
				<a href=""><nuxt-picture src="/img/placeholder.png" alt=""/></a>
			</div>
			<div class="mobile-menu-close" @click="closeMobileMenu">
				<icon-base icon-name="bars" width="32px" height="32px" iconColor="black" iconViewBox="0 0 352 512"><icon-times /></icon-base>
			</div>
			<div class="container">
				<div class="row">
					<div class="col-12 menu-item">
						<a href="javascript:;">
							<div class="drop-menu-head b-efect">Biz Kimiz?</div>
							<div class="angle-down">
								<icon-base icon-name="bars" width="32px" height="32px" iconColor="black" iconViewBox="0 0 320 512"><icon-angle-down /></icon-base>
							</div>
						</a>
						<div class="drop-menu">
							<a href="/tr/hikayemiz">
								<div class="drop-menu-item">Hikayemiz</div>
							</a>
							<a href="/tr/hakkimizda">
								<div class="drop-menu-item">Hakkımızda</div>
							</a>
							<a href="/tr/proje-ekibi">
								<div class="drop-menu-item">Proje Ekibi</div>
							</a>
							<a href="/tr/sss">
								<div class="drop-menu-item">SSS</div>
							</a>
						</div>
					</div>
					<div class="col-12 menu-item">
						<a href="javascript:;">
							<div class="drop-menu-head b-efect">
								Neler Yapıyoruz?
							</div>
							<div class="angle-down">
								<icon-base icon-name="bars" width="32px" height="32px" iconColor="black" iconViewBox="0 0 320 512"><icon-angle-down /></icon-base>
							</div>
						</a>
						<div class="drop-menu">
							<a href="/tr/haberler">
								<div class="drop-menu-item">Haberler</div>
							</a>
							<a href="/tr/etkinlikler">
								<div class="drop-menu-item">Etkinlikler</div>
							</a>
							<a href="/tr/duyurular">
								<div class="drop-menu-item">Duyurular</div>
							</a>
						</div>
					</div>
					<div class="col-12 menu-item">
						<a href="javascript:;">
							<div class="drop-menu-head b-efect">
								Kariyerine Merhaba DE
							</div>
							<div class="angle-down">
								<icon-base icon-name="bars" width="32px" height="32px" iconColor="black" iconViewBox="0 0 320 512"><icon-angle-down /></icon-base>
							</div>
						</a>
						<div class="drop-menu">
							<a href="/tr/mentorluk-programi">
								<div class="drop-menu-item">
									Mentorluk Programı
								</div>
							</a>
							<a href="/tr/ogrenci-gelisim-programi">
								<div class="drop-menu-item">
									Öğrenci Gelişim Programı
								</div>
							</a>
							<a href="/tr/startup">
								<div class="drop-menu-item">StartUP</div>
							</a>
							<a href="/tr/wetalk">
								<div class="drop-menu-item">WeTalk</div>
							</a>
							<a href="/tr/adviceup">
								<div class="drop-menu-item">AdviceUP</div>
							</a>
							<a href="/tr/talentup">
								<div class="drop-menu-item">TalentUP</div>
							</a>
						</div>
					</div>
					<div class="col-12 menu-item b-efect">
						<a href="bize-katil">
							<div>Bize Katıl</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isMobileMenuActive: false,
		};
	},
	methods: {
		openMobileMenu: function() {
			this.isMobileMenuActive = true;
		},
		closeMobileMenu: function() {
			this.isMobileMenuActive = false;
		},
	},
};
</script>

<style lang="scss" scoped>
$anaRenk: #12203c;

.logo {
	text-align: center;
	img {
		max-height: 60px;
		width: auto;
		margin: auto;
	}
}
.mobile-menu-button {
	display: block;
	position: absolute;
	top: 0px;
	right: 15px;
	line-height: 70px;
	font-size: 30px;
	cursor: pointer;
	img {
		width: "32px";
		height: "32px";
	}
}
.mobile-menu-button.active {
	position: fixed;
	z-index: 5;
}
.mobile-menu {
	position: fixed;
	width: 100%;
	height: 100vh;
	max-height: 100%;
	overflow: scroll;
	top: 0px;
	left: 100%;
	background: #fff;
	display: flex;
	justify-content: center;
	transition: all ease 0.5s;
	z-index: 20;
	.container {
		margin-top: 100px;
	}
	.mobile-menu-close {
		position: absolute;
		top: 10px;
		right: 15px;
		font-size: 30px;
		cursor: pointer;
	}
	.b-efect {
		font-weight: 500;
		border-bottom: 1px solid #292929;
	}
	.menu-item {
		width: 100%;
		padding: 0px;
		margin: 5px auto;
		a {
			div {
				padding: 5px;
			}
			.drop-menu-head {
				width: 100%;
				display: inline-block;
			}
			.angle-down {
				transition: all ease 0.5s;
				position: absolute;
				display: inline-block;
				right: 10px;
			}
		}
		&:hover {
			background: #12203c;
			a {
				color: #fff;
			}
			.drop-menu {
				background: #fff;
				a {
					color: #000;
				}
			}
		}
	}
	.drop-menu {
		display: none;
		.drop-menu-item {
			font-size: 14px;
			padding-left: 10px;
			&:hover {
				background: #12203c;
				color: #fff;
				a {
					color: #fff;
				}
			}
		}
	}
	.menu-item.active {
		.angle-down {
			transform: rotate(180deg);
		}
		.drop-menu {
			display: block;
			animation: openEfect 1s normal;
		}
	}
	.mobile-logo {
		position: absolute;
		top: 10px;
		img {
			max-height: 70px;
			width: auto;
		}
	}
}
.mobile-menu.active {
	left: 0px;
}
</style>
