<template>
	<div class="list">
		<div
			v-for="item in $t('news.content')
				.slice()
				.reverse()"
			:key="item.title"
		>
			<Card :item="item" section="news" />
		</div>
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: this.$i18n.t("news.title"),
			meta: [],
		};
	},
};
</script>

<style></style>
