<template>
	<div class="mobile-navbar">
		<div class="container">
			<div class="flex-container">
				<div class="logo">
					<NuxtLink :to="`/${this.$i18n.locale}`"><nuxt-img src="/img/logo/logo.png" alt="" width="164" height="50" fit="inside"/></NuxtLink>
				</div>

				<div class="mobile-menu-button" @click="toggleMobileMenu()" v-show="!isMobileMenuActive">
					<icon-bars width="32px" height="32px" color="black" />
				</div>

				<div class="mobile-menu-button" @click="toggleMobileMenu()" v-show="isMobileMenuActive">
					<icon-times width="32px" height="32px" color="black" />
				</div>
			</div>
		</div>

		<div class="mobile-menu" v-show="isMobileMenuActive">
			<mobile-navbar-dropdown tab="nav.us" />
			<mobile-navbar-dropdown tab="nav.do" />
			<mobile-navbar-dropdown tab="nav.career" />
			<!-- <span class="menu-button"><a href="bize-katil">Bize Katıl</a></span> -->
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
		justify-content: space-between;
		align-items: center;
		.logo {
			vertical-align: middle;
			left: 0;
			padding: 8px 16px 0px 16px;
		}
		.mobile-menu-button {
			vertical-align: middle;
			right: 0;
			padding: 8px 16px 1px 16px;
			cursor: pointer;
		}
	}
}
</style>
