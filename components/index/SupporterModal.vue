<template>
	<div class="supporter-modal">
		<div class="supporter-img">
			<nuxt-img draggable="false" :src="imgLink" alt="" width="300px" />
		</div>
	</div>
</template>

<script>
export default {
	name: "SupporterModal",
	props: {
		imgLink: String,
	},
};
</script>

<style lang="scss" scoped>
.supporter-modal {
	user-select: none;
	padding: 10px;
	margin-bottom: 12px;
	.supporter-img {
		border-radius: 10px;
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
