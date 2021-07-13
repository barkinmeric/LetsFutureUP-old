<template>
	<div>
		<locale-switcher />
		<desktop-navbar />
		<mobile-navbar />
		<nuxt />
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.mobile-navbar {
	display: block;
}

.desktop-navbar {
	display: none;
}

@media (min-width: 992px) {
	.mobile-navbar {
		display: none;
	}
	.desktop-navbar {
		display: block;
	}
}
</style>
