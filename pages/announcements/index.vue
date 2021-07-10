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
	name: "List",
};
</script>

<style></style>
