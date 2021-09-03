<template>
	<div>
		<social-head :title="data.title" :description="data.text" :image="`https://letsfutureup-nuxt.netlify.app${data.image}`" />
		<data-page :content="data" />
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: `${this.data.title} | Let's FutureUP ${this.$i18n.t("announcements.title")} | letsfutureup.com`,
			meta: [
				{
					hid: "description",
					name: "description",
					content: this.data.text,
				},
			],
		};
	},
	data() {
		return {
			data: this.$i18n.t("announcements.content").filter((item) => this.toUrl(item.title) == this.$route.params.name)[0],
		};
	},
	methods: {
		toUrl(text) {
			return text
				.toLowerCase()
				.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
				.replace(/ /gim, "-")
				.replace(/--/gim, "-")
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
