<template>
	<div class="mentorship-modal">
		<div class="mentorship-img">
			<nuxt-img draggable="false" src="/img/placeholder.png" alt="" width="150px" height="150px" />
		</div>
		<div class="mentorship-text">
			<div class="name">ASDASFA</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MentorshipModal",
	props: {
		imgLink: String,
		name: String,
	},
};
</script>

<style lang="scss" scoped>
.mentorship-modal {
	user-select: none;
	padding: 20px;
	text-align: center;
	.mentorship-img {
		border-radius: 50%;
		img {
			border-radius: 50%;
			filter: grayscale(100%);
			transition: all ease 0.5s;
			&:hover {
				filter: grayscale(0%);
				animation: submit 1s infinite;
			}
		}
	}
	.mentorship-text {
		padding: 10px 0px;
		.name {
			font-weight: 800;
			letter-spacing: 1px;
			font-size: 18px;
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
