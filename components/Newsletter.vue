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
export default {};
</script>

<style lang="scss" scoped>
.grid-container {
	display: grid;
	grid-template-columns: 50% 50%;
}
@media (max-width: 991px) {
	.grid-container {
		display: grid;
		grid-template-columns: 100%;
		.newsletter-carousel {
			margin-bottom: 100px;
		}
	}
}
</style>
