<template>
	<div class="locale-switcher">
		<div class="container">
			<div class="grid-container">
				<div>
					<NuxtLink :to="switchLocalePath('tr')"><span :class="{ active: this.$i18n.locale === 'tr' }">TR</span></NuxtLink>
					/
					<NuxtLink :to="switchLocalePath('en')"><span :class="{ active: this.$i18n.locale === 'en' }">EN</span></NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "LocaleSwitcher",
	watch: {
		$route(to, from) {
			console.log(to);
			if (to.params.name) {
				if (to.fullPath.split("/")[1] != from.fullPath.split("/")[1]) {
					console.log(to);

					this.$router.push(to.fullPath.replace(to.params.name, ""));
				}
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.locale-switcher {
	width: 100%;
	height: 30px;
	background: #292929;
	color: #eee;
	font-size: 12px;
	line-height: 30px;
	.grid-container {
		display: grid;
		justify-content: end;
		margin-right: 16px;
		span {
			color: #eee;
			transition: all ease 0.5s;
			cursor: pointer;
			&:hover {
				color: $sideColor;
			}
		}
		.active {
			color: $sideColor;
			font-weight: bold;
		}
	}
}
</style>
