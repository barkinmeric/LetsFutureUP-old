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
			<!-- <span class="menu-button"><a href="bize-katil">Bize Katıl</a></span> -->
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
	watch: {
		$route(to, from) {
			this.isMobileMenuActive = false;
		},
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

.mobile-navbar {
	.container {
		width: 100%;
		padding-right: 0.75rem;
		padding-left: 0.75rem;
		margin-right: auto;
		margin-left: auto;
		.grid-container {
			display: grid;
			grid-template-columns: 20% auto 20%;
			.logo {
				grid-column: 2 / 3;
				text-align: center;
			}
			.mobile-menu-button {
				text-align: right;
				padding: 18px 16px 16px 16px;
				cursor: pointer;
			}
		}
	}
}
</style>
