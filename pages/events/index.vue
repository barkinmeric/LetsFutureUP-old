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
			title: this.$i18n.t("events.title"),
			meta: [],
		};
	},
};
</script>

<style></style>
