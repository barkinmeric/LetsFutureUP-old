<template>
	<div class="mentorship-modal">
		<div class="mentorship-img">
			<nuxt-img format="jpg" :src="item.image" :alt="item.name" width="150px" height="150px" draggable="false" loading="lazy" />
		</div>
		<div class="mentorship-text">
			<div class="name">{{ item.name }}</div>
			<div class="place">{{ item.place }}</div>
			<div class="position">{{ item.position }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MentorshipModal",
	props: {
		item: Object,
	},
};
</script>

<style lang="scss" scoped>
.mentorship-modal {
	user-select: none;
	padding: 20px;
	text-align: center;
	width: 250px;
	.mentorship-img {
		border-radius: 50%;
		img {
			border-radius: 50%;
			transition: all ease 0.5s;
			&:hover {
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
		.place {
			width: 100%;
		}
		.position {
			width: 100%;
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
