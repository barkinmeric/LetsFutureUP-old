<template>
	<div class="list">
		<div
			v-for="item in $t('events.content')
				.slice()
				.reverse()"
			:key="item.title"
		>
			<Card :item="item" section="events" />
		</div>
	</div>
</template>

<script>
export default {
	name: "List",
};
</script>

<style></style>
