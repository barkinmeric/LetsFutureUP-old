<template>
	<div class="desktop-navbar">
		<div class="container">
			<div class="row">
				<div class="col-2 logo">
					<NuxtLink :to="`/${this.$i18n.locale}`"><nuxt-picture src="/img/logo/logo.png" height="70" width="200"/></NuxtLink>
				</div>
				<div class="col-10 head-menu">
					<nav>
						<ul>
							<navbar-dropdown tab="nav.us" />
							<navbar-dropdown tab="nav.do" />
							<navbar-dropdown tab="nav.career" />
							<a href="bize-katil">
								<li>Bize Katıl</li>
							</a>
						</ul>
					</nav>
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

.container {
	width: 100%;
	padding-right: 0.75rem;
	padding-left: 0.75rem;
	margin-right: auto;
	margin-left: auto;
}

.row {
	--bs-gutter-x: 1.5rem;
	--bs-gutter-y: 0;
	display: flex;
	flex-wrap: wrap;
	margin-top: 0;
	margin-right: -0.75rem;
	margin-left: -0.75rem;
}

.col-2 {
	flex: 0 0 auto;
	width: 16.66666667%;
}

.col-10 {
	flex: 0 0 auto;
	width: 83.33333333%;
}

.desktop-navbar {
	width: 100%;
	height: 70px;
	background: #fff;
	line-height: 70px;
	transition: all ease 0.4s;
	img {
		height: 50px;
		width: 135px;
	}
	.head-menu {
		display: flex;
		justify-content: flex-end;
		nav {
			ul {
				display: flex;
				a {
					cursor: pointer;
					padding-left: 20px;
					font-size: 12px;
					padding-right: 20px;
					letter-spacing: 2px;
					font-weight: 600;
					transition: all ease 0.4s;
					&:hover {
						background: $anaRenk;
						color: #fff;
					}
				}
			}
		}
	}
}
</style>
