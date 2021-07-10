<template>
	<div class="list">
		<div
			v-for="item in $t('announcements.content')
				.slice()
				.reverse()"
			:key="item.title"
		>
			<Card :item="item" section="announcements" />
		</div>
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: this.$i18n.t("announcements.title"),
			meta: [],
		};
	},
};
</script>

<style></style>
