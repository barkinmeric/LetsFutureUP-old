<template>
	<div>
		<index-carousel />
		<motto />
		<hello-career />
		<newsletter />
		<!-- <e-bulletin /> -->
		<mobile-board />
		<desktop-board />
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: "Home Page",
			meta: [],
		};
	},
};
</script>

<style lang="scss" scoped>
.mobile-board {
	display: block;
}
.desktop-board {
	display: none;
}
@media (min-width: 992px) {
	.mobile-board {
		display: none;
	}
	.desktop-board {
		display: block;
	}
}
</style>
