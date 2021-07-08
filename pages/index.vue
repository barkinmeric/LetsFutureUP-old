<template>
	<div>
		<navbar />
		<locale-switcher />
		<h1>{{ $t("nav.us.title") }}</h1>
		<nuxt-link to="/about">{{ $t("about") }}</nuxt-link>
		<nuxt-link to="/contact">{{ $t("contact") }}</nuxt-link>
	</div>
</template>

<script>
export default {};
</script>
