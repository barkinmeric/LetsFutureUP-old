<template>
	<div class="hello-career-card">
		<div class="hc-head">
			<nuxt-img :src="item.icon" :alt="item.title" width="64px" height="64px" draggable="false" loading="lazy" />
		</div>
		<div class="hc-body">
			<div class="title">
				<NuxtLink :to="localePath(toUrl($t('index.hello-career.content', 'en')[index].title))">
					<h3>{{ item.title }}</h3>
				</NuxtLink>
			</div>
			<div class="text">
				<p>
					{{ truncate(item.text, 600) }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "HelloCareerCard",
	props: {
		item: Object,
		index: Number,
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
		truncate(str, len) {
			if (str.length > len && str.length > 0) {
				let new_str = str + " ";
				new_str = str.substr(0, len);
				new_str = str.substr(0, new_str.lastIndexOf(" "));
				new_str = new_str.length > 0 ? new_str : str.substr(0, len);
				return new_str + "...";
			}
			return str;
		},
	},
};
</script>

<style lang="scss" scoped>
.hello-career-card {
	position: relative;
	width: 100%;
	margin: 60px auto 10px auto;
	padding: 10px;
	background: #fff;
	border-radius: 10px;
	border: 1px solid black;
	.hc-head {
		position: absolute;
		width: 100px;
		height: 100px;
		background: #fff;
		border: 1px solid black;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 50px;
		border-radius: 100%;
		left: 50%;
		top: 0px;
		transform: translate(-50%, -50%);
	}
	.hc-body {
		padding: 50px 5px 10px 5px;
		text-align: center;
		.title {
			display: inline-block;
			border-bottom: 1px solid $sideColor;
			border-bottom-width: 3px;
			padding-bottom: 3px;
			h3 {
				font-weight: 700;
				font-size: 20px;
			}
		}
		.text {
			text-align: center;
			padding: 10px 0px 10px 0px;
			p {
				font-weight: 500;
				font-size: 14px;
			}
		}
	}
}
</style>
