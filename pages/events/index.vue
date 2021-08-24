<template>
	<div class="list">
		<div
			v-for="item in $t('events.content')
				.slice()
				.reverse()"
			:key="item.title"
		>
			<list-card :item="item" section="events" />
		</div>
	</div>
</template>

<script>
export default {
	name: "List",
	head() {
		return {
			title: `Let's FutureUP ${this.$i18n.t("announcements.title")} ${this.$i18n.t("url")}`,
			meta: [],
		};
	},
};
</script>

<style></style>
