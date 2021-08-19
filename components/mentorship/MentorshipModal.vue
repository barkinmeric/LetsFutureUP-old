<template>
	<div class="mentorship-modal">
		<div class="mentorship-img">
			<nuxt-img draggable="false" :src="`/img/pages/mentor-mentee/${toUrl(name)}.png`" alt="" width="150px" height="150px" />
		</div>
		<div class="mentorship-text">
			<div class="name">{{ name }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MentorshipModal",
	props: {
		name: String,
	},
	methods: {
		toUrl(text) {
			return text
				.replace(/İ/gim, "I")
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
.mentorship-modal {
	user-select: none;
	padding: 20px;
	text-align: center;
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
