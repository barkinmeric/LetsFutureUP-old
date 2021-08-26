<template>
	<div>
		<social-head :title="$t('index.title')" :description="$t('index.desc')" />
		<index-carousel />
		<motto />
		<hello-career />
		<opinion />
		<newsletter />
		<e-journal />
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
	head() {
		return {
			title: `Let's FutureUP ${this.$i18n.t("index.title")} ${this.$i18n.t("url")}`,
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
