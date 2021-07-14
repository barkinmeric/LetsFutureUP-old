<template>
	<div class="desktop-navbar">
		<div class="container">
			<div class="grid-container">
				<div class="logo">
					<NuxtLink :to="`/${this.$i18n.locale}`"><nuxt-picture src="/img/logo/logo.png" height="70" width="200"/></NuxtLink>
				</div>
				<div class="content">
					<desktop-navbar-dropdown tab="nav.us" />
					<desktop-navbar-dropdown tab="nav.do" />
					<desktop-navbar-dropdown tab="nav.career" />
					<button><a href="bize-katil">Bize Katıl</a></button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$anaRenk: #12203c;

.desktop-navbar {
	.container {
		width: 100%;
		padding-right: 0.75rem;
		padding-left: 0.75rem;
		margin-right: auto;
		margin-left: auto;
		.grid-container {
			display: grid;
			justify-content: space-between;
			grid-template-columns: 200px auto;
			.content button {
				height: 100%;
				line-height: 40px;
				font-weight: 600;
				font-size: 12px;
				letter-spacing: 2px;
				transition: all ease 0.2s;
				background-color: #fff;
				color: $anaRenk;
				padding: 16px;
				border: none;
				cursor: pointer;
				&:hover {
					background: $anaRenk;
					a {
						color: #fff;
					}
				}
			}
		}
	}
}
</style>
