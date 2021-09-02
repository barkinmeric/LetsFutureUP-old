<template>
	<div class="partner-modal">
		<div class="partner-img">
			<nuxt-img format="jpg" :src="image" alt="partner" width="300px" height="200px" draggable="false" loading="lazy" />
		</div>
	</div>
</template>

<script>
export default {
	name: "PartnerModal",
	props: {
		image: String,
	},
};
</script>

<style lang="scss" scoped>
.partner-modal {
	user-select: none;
	padding: 10px;
	.partner-img {
		border-radius: 10px;
		padding: 10px 20px;
		img {
			box-shadow: 0px 0px 5px 1px #292929;
			border-radius: 10px;
			filter: grayscale(100%);
			transition: all ease 0.5s;
			&:hover {
				filter: grayscale(0%);
				animation: submit 1s infinite;
			}
		}
	}
}
@keyframes submit {
	0% {
		box-shadow: 0px 0px 0px 0px rgba(0, 255, 0, 0.7);
	}
	70% {
		box-shadow: 0px 0px 0px 10px rgba(0, 255, 0, 0);
	}
	100% {
		box-shadow: 0px 0px 0px 0px rgba(0, 255, 0, 0);
	}
}
</style>
