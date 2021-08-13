<template>
	<div class="hello-career-card">
		<div class="hc-head">
			<nuxt-img draggable="false" :src="icon" alt="" width="64px" height="64px" />
		</div>
		<div class="hc-body">
			<div class="title">
				<NuxtLink :to="localePath(toUrl($t(`${content}.title`, 'en')))">
					<span>{{ $t(`${content}.title`) }} </span>
				</NuxtLink>
			</div>
			<div class="text">
				{{ $t(`${content}.text`) }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "HelloCareerCard",
	props: {
		content: String,
		icon: String,
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
			font-weight: 700;
			font-size: 20px;
			border-bottom: 1px solid $sideColor;
			border-bottom-width: 3px;
			padding-bottom: 3px;
		}
		.text {
			text-align: left;
			font-weight: 500;
			padding: 10px 0px 10px 0px;
			font-size: 14px;
		}
	}
}
</style>
