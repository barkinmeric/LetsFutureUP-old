<template>
	<div>
		<index-carousel />
		<motto />
		<hello-career />
		<opinion />
		<newsletter />
		<e-bulletin />
		<mobile-board />
		<desktop-board />
		<mobile-partner />
		<desktop-partner />
		<mobile-supporter />
		<desktop-supporter />
		<join-us />
	</div>
</template>

<script>
export default {
	middleware: "redirect",
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
.mobile-supporter {
	display: block;
}
.desktop-supporter {
	display: none;
}
.mobile-partner {
	display: block;
}
.desktop-partner {
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
@media (min-width: 1200px) {
	.mobile-supporter {
		display: none;
	}
	.desktop-supporter {
		display: block;
	}
	.mobile-partner {
		display: none;
	}
	.desktop-partner {
		display: block;
	}
}
</style>
