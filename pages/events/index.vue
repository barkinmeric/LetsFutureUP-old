<template>
	<div class="list">
		<social-head :title="$t('events.title')" :description="$t('index.desc')" />
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
			title: `Let's FutureUP ${this.$i18n.t("events.title")} ${this.$i18n.t("url")}`,
			meta: [
				{
					hid: "description",
					name: "description",
					content: this.$i18n.t("index.desc"),
				},
			],
		};
	},
};
</script>

<style></style>
