<template>
	<div class="list">
		<div
			v-for="item in $t('announcements.content')
				.slice()
				.reverse()"
			:key="item.title"
		>
			<list-card :item="item" section="announcements" />
		</div>
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: `Let's FutureUP ${this.$i18n.t("announcements.title")} ${this.$i18n.t("url")}`,
			meta: [],
		};
	},
};
</script>

<style></style>
