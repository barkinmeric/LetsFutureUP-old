<template>
	<section class="other-page">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-12 img">
					<img src="" alt="" />
				</div>
				<div v-for="item in data" :key="item.title">
					<div v-if="toUrl(item.title) == url_data" class="col-lg-12 col-12 text mt-1 mb-1">
						<h2>{{ item.title }}</h2>
						<p>{{ item.text }}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	mounted() {
		this.url_data = this.$route.params.name;
		this.data = this.$i18n.t("events.content");
	},
	data() {
		return {
			url_data: null,
			data: null,
		};
	},
	methods: {
		toUrl(text) {
			return text
				.toLowerCase()
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

<style>
section.other-page .img {
	max-height: 300px;
	z-index: -1;
}

section.other-page .img img {
	max-height: 300px;
}

section.other-page .text h2 {
	font-size: 20px;
	font-weight: 600;
	letter-spacing: 1px;
	text-transform: uppercase;
	position: relative;
	padding: 5px 0px;
	color: #000;
}

section.other-page .text h3 {
	font-size: 18px;
	font-weight: 550;
	letter-spacing: 1px;
	text-transform: uppercase;
	position: relative;
	padding: 5px 0px;
	margin: 10px 0px 0px 0px;
	color: #000;
}

section.other-page .text h2::before {
	content: "";
	position: absolute;
	height: 2px;
	width: 75px;
	bottom: 0px;
	left: 0px;
	background: #00ff00;
}

section.other-page .text p {
	color: #292929;
	padding: 5px 0px 10px 0px;
	margin: 0px;
	font-size: 16px;
	font-weight: normal;
}

section.other-page .text ul {
	padding: 0px;
}
</style>
