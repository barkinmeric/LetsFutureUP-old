<template>
	<div class="list">
		<social-head :title="$t('announcements.title')" :description="$t('index.desc')" />
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
