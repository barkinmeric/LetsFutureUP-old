<template>
	<div class="mobile-navbar">
		<div class="container">
			<div class="grid-container">
				<div class="logo">
					<NuxtLink :to="`/${this.$i18n.locale}`"><nuxt-picture src="/img/logo/logo.png" alt="" width="200" height="70"/></NuxtLink>
				</div>

				<div class="mobile-menu-button" @click="toggleMobileMenu()" v-show="!isMobileMenuActive">
					<icon-base icon-name="bars" width="32px" height="32px" iconColor="black" iconViewBox="0 0 448 512"><icon-bars /></icon-base>
				</div>

				<div class="mobile-menu-button" @click="toggleMobileMenu()" v-show="isMobileMenuActive">
					<icon-base icon-name="times" width="32px" height="32px" iconColor="black" iconViewBox="0 0 352 512"><icon-times /></icon-base>
				</div>
			</div>
		</div>

		<div class="mobile-menu" v-show="isMobileMenuActive">
			<mobile-navbar-dropdown tab="nav.us" />
			<mobile-navbar-dropdown tab="nav.do" />
			<mobile-navbar-dropdown tab="nav.career" />
			<!-- <button><a href="bize-katil">Bize Katıl</a></button> -->
		</div>
	</div>
</template>

<script>
import IconTimes from "@/components/icons/IconTimes.vue";
import IconBars from "@/components/icons/IconBars.vue";
export default {
	components: { IconTimes, IconBars },
	data() {
		return {
			isMobileMenuActive: false,
		};
	},
	methods: {
		toggleMobileMenu: function() {
			this.isMobileMenuActive = !this.isMobileMenuActive;
		},
	},
};
</script>

<style lang="scss" scoped>
$anaRenk: #12203c;

.container {
	width: 100%;
	padding-right: 0.75rem;
	padding-left: 0.75rem;
	margin-right: auto;
	margin-left: auto;
}

.grid-container {
	display: grid;
	grid-template-columns: 20% auto 20%;
}

.logo {
	grid-column: 2 / 3;
	text-align: center;
}
.mobile-menu-button {
	text-align: right;
	padding: 18px 16px 16px 16px;
	cursor: pointer;
}
// .mobile-menu-button.active {
// 	position: fixed;
// 	z-index: 5;
// }
// .mobile-menu {
// 	position: fixed;
// 	width: 100%;
// 	height: 100vh;
// 	max-height: 100%;
// 	overflow: scroll;
// 	top: 0px;
// 	left: 100%;
// 	background: #fff;
// 	display: flex;
// 	justify-content: center;
// 	transition: all ease 0.5s;
// 	z-index: 20;
// 	.container {
// 		margin-top: 100px;
// 	}
// 	.mobile-menu-close {
// 		position: absolute;
// 		top: 10px;
// 		right: 15px;
// 		font-size: 30px;
// 		cursor: pointer;
// 	}
// 	.b-efect {
// 		font-weight: 500;
// 		border-bottom: 1px solid #292929;
// 	}
// 	.menu-item {
// 		width: 100%;
// 		padding: 0px;
// 		margin: 5px auto;
// 		a {
// 			div {
// 				padding: 5px;
// 			}
// 			.drop-menu-head {
// 				width: 100%;
// 				display: inline-block;
// 			}
// 			.angle-down {
// 				transition: all ease 0.5s;
// 				position: absolute;
// 				display: inline-block;
// 				right: 10px;
// 			}
// 		}
// 		&:hover {
// 			background: #12203c;
// 			a {
// 				color: #fff;
// 			}
// 			.drop-menu {
// 				background: #fff;
// 				a {
// 					color: #000;
// 				}
// 			}
// 		}
// 	}
// 	.drop-menu {
// 		display: none;
// 		.drop-menu-item {
// 			font-size: 14px;
// 			padding-left: 10px;
// 			&:hover {
// 				background: #12203c;
// 				color: #fff;
// 				a {
// 					color: #fff;
// 				}
// 			}
// 		}
// 	}
// 	.menu-item.active {
// 		.angle-down {
// 			transform: rotate(180deg);
// 		}
// 		.drop-menu {
// 			display: block;
// 			animation: openEfect 1s normal;
// 		}
// 	}
// 	.mobile-logo {
// 		position: absolute;
// 		top: 10px;
// 		img {
// 			max-height: 70px;
// 			width: auto;
// 		}
// 	}
// }
// .mobile-menu.active {
// 	left: 0px;
// }
</style>
