<template>
	<div class="desktop-navbar">
		<div class="container">
			<div class="grid-container">
				<div class="logo">
					<NuxtLink :to="`/${this.$i18n.locale}`"><nuxt-img src="/img/logo/logo.png" height="70" width="230" fit="inside"/></NuxtLink>
				</div>
				<div class="content">
					<desktop-navbar-dropdown tab="nav.us" />
					<desktop-navbar-dropdown tab="nav.do" />
					<desktop-navbar-dropdown tab="nav.career" />
					<button>
						<a :href="$t('nav.join-us.link')">{{ $t("nav.join-us.title") }}</a>
					</button>
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
	.grid-container {
		display: grid;
		justify-content: space-between;
		grid-template-columns: 2px auto;
		.logo {
			height: 100%;
			img {
				height: 100%;
				width: auto;
			}
		}
		.content {
			button {
				height: 100%;
				line-height: 40px;
				font-weight: 600;
				font-size: 14px;
				letter-spacing: 2px;
				transition: all ease 0.2s;
				background-color: #fff;
				color: $mainColor;
				padding: 16px;
				border: none;
				cursor: pointer;
				&:hover {
					background: $mainColor;
					a {
						color: #fff;
					}
				}
			}
		}
	}
}
</style>
