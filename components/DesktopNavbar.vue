<template>
	<div class="desktop-navbar">
		<div class="container">
			<div class="flex-container">
				<div class="logo">
					<NuxtLink :to="`/${this.$i18n.locale}`"><nuxt-img draggable="false" src="/logo/logo.png" alt="logo" height="70" width="230"/></NuxtLink>
				</div>
				<div class="content">
					<desktop-navbar-dropdown tab="nav.us" />
					<desktop-navbar-dropdown tab="nav.do" />
					<desktop-navbar-dropdown tab="nav.career" />
					<a :href="$t('nav.join-us.link')" target="_blank" rel="noopener">
						<h3 class="join">{{ $t("nav.join-us.title") }}</h3>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "DesktopNavbar",
};
</script>

<style lang="scss" scoped>
.desktop-navbar {
	.flex-container {
		display: flex;
		height: 70px;
		.logo {
			margin-right: auto;
			height: 100%;
		}
		.content {
			margin-left: auto;
			height: 100%;
			.join {
				display: inline-block;
				margin: 0;
				padding: 16px;
				height: 70px;
				line-height: 40px;
				font-weight: 600;
				letter-spacing: 2px;
				font-size: 14px;
				background-color: #fff;
				color: $mainColor;
				cursor: pointer;
				&:hover {
					background: $mainColor;
					color: #fff;
				}
			}
		}
	}
}
</style>
