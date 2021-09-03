<template>
	<div class="newsletter">
		<div class="container">
			<div class="grid-container">
				<newsletter-carousel section="announcements" />
				<newsletter-carousel section="events" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Newsletter",
};
</script>

<style lang="scss" scoped>
.newsletter {
	.grid-container {
		display: grid;
		grid-template-columns: 50% 50%;
		column-gap: 15px;
		padding-right: 15px;
	}
}
@media (max-width: 991px) {
	.newsletter {
		margin-bottom: 20px;
		.grid-container {
			display: grid;
			grid-template-columns: 100%;
		}
	}
}
</style>
