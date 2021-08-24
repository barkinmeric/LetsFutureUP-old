<template>
	<data-page :content="data" />
</template>

<script>
export default {
	head() {
		return {
			title: `${this.data.title} | Let's FutureUP ${this.$i18n.t("events.title")} | letsfutureup.com`,
			meta: [],
		};
	},
	data() {
		return {
			data: this.$i18n.t("events.content").filter((item) => this.toUrl(item.title) == this.$route.params.name)[0],
		};
	},
	methods: {
		toUrl(text) {
			return text
				.toLowerCase()
				.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
				.replace(/ /gim, "-")
				.replace(/ğ/gim, "g")
				.replace(/ü/gim, "u")
				.replace(/ş/gim, "s")
				.replace(/ı/gim, "i")
				.replace(/ö/gim, "o")
				.replace(/ç/gim, "c");
		},
	},
};
</script>
