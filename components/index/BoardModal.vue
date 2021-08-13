<template>
	<div class="board-modal">
		<div class="board-img">
			<nuxt-img draggable="false" :src="imgLink" alt="" width="150px" />
		</div>
		<div class="board-text">
			<div class="name">{{ name }}</div>
			<div class="corp">{{ corp }}</div>
			<div class="title">{{ title }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "BoardModal",
	props: {
		imgLink: String,
		name: String,
		corp: String,
		title: String,
	},
};
</script>

<style lang="scss" scoped>
.board-modal {
	user-select: none;
	padding: 20px;
	.board-img {
		border-radius: 100%;
		img {
			border-radius: 100%;
			filter: grayscale(100%);
			transition: all ease 0.5s;
			&:hover {
				filter: grayscale(0%);
				animation: submit 1s infinite;
			}
		}
	}
	.board-text {
		padding: 10px 0px;
		.name {
			font-weight: 800;
			letter-spacing: 1px;
			font-size: 18px;
		}
		.corp {
			font-weight: 600;
			font-size: 16px;
		}
		.title {
			font-weight: 500;
			font-size: 14px;
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
