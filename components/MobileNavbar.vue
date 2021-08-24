<template>
	<div class="mobile-navbar">
		<div class="container">
			<div class="flex-container">
				<div class="logo">
					<NuxtLink :to="`/${this.$i18n.locale}`"><nuxt-img draggable="false" src="/logo/logo.png" alt="logo" width="164" height="50"/></NuxtLink>
				</div>

				<div class="mobile-menu-button" @click="toggleMobileMenu()" v-show="!isMobileMenuActive">
					<icon-bars width="32px" height="32px" color="black" />
				</div>

				<div class="mobile-menu-button" @click="toggleMobileMenu()" v-show="isMobileMenuActive">
					<icon-times width="32px" height="32px" color="black" />
				</div>
			</div>
			<div class="mobile-menu" v-show="isMobileMenuActive">
				<mobile-navbar-dropdown tab="nav.us" />
				<mobile-navbar-dropdown tab="nav.do" />
				<mobile-navbar-dropdown tab="nav.career" />
				<a :href="$t('nav.join-us.link')" target="_blank" rel="noopener">
					<h3 class="join">
						{{ $t("nav.join-us.title") }}
					</h3>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MobileNavbar",
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
	watch: {
		$route(to, from) {
			this.isMobileMenuActive = false;
		},
	},
};
</script>

<style lang="scss" scoped>
.mobile-navbar {
	.flex-container {
		display: flex;
		align-items: center;
		.logo {
			margin-right: auto;
			padding: 8px 16px 0px 16px;
		}
		.mobile-menu-button {
			margin-left: auto;
			margin-right: 16px;
			cursor: pointer;
			width: 32px;
			height: 32px;
		}
	}
	.mobile-menu {
		.join {
			text-align: left;
			width: 100%;
			line-height: 40px;
			font-weight: 600;
			font-size: 14px;
			letter-spacing: 2px;
			background-color: #fff;
			color: $mainColor;
			cursor: pointer;
			padding: 12px 16px;
		}
	}
}
</style>
