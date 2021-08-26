<template>
	<div class="e-journal-item">
		<div class="e-journal-img">
			<a :href="item.file" target="_blank" rel="noopener"><nuxt-img format="jpg" :src="item.image" :alt="item.text" height="160px" width="240px" draggable="false" loading="lazy"/></a>
		</div>
		<div class="e-journal-text">{{ item.text }}</div>
	</div>
</template>

<script>
export default {
	name: "EJournalItem",
	props: {
		item: Object,
	},
};
</script>

<style lang="scss" scoped>
.e-journal-item {
	margin: 20px;
	.e-journal-img {
		user-select: none;
		border-radius: 10px;
		box-shadow: 0px 0px 5px 1px #292929;
		height: 160px;
		width: 240px;
		img {
			border-radius: 10px;
		}
	}
	.e-journal-text {
		text-align: center;
		padding: 10px 0px;
		font-weight: 500;
		font-size: 18px;
	}
}
</style>
