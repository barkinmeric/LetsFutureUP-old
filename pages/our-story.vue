<template>
	<div>
		<h1>{{ $t("nav.us.title") }}</h1>
		<nuxt-link :to="localePath('about')">{{ $t("about") }}</nuxt-link>
		<nuxt-link :to="localePath('contact')">{{ $t("contact") }}</nuxt-link>
		<span v-for="i in $t('nav.us.content')" :key="i">{{ i }}</span>
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: "Home Page",
			meta: [],
		};
	},
};
</script>
