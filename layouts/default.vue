<template>
	<div>
		<locale-switcher />
		<desktop-navbar />
		<mobile-navbar />
		<nuxt />
		<desktop-footer />
		<mobile-footer />
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
.mobile-footer {
	display: block;
}

.desktop-footer {
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

@media (min-width: 768px) {
	.mobile-footer {
		display: none;
	}
	.desktop-footer {
		display: block;
	}
}
</style>
