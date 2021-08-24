<template>
	<div class="opinion-modal">
		<div class="opinion-img">
			<nuxt-img format="jpg" :src="item.image" :alt="item.name" width="150px" height="150px" draggable="false" loading="lazy" />
		</div>
		<div class="opinion-body">
			<span class="name">{{ item.name }}</span>
			<span class="place">{{ item.place }}</span>
			<span class="position">{{ item.position }}</span>
			<div class="text">{{ item.text }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "OpinionModal",
	props: {
		item: Object,
	},
};
</script>

<style lang="scss" scoped>
.opinion-modal {
	padding: 20px;
	.opinion-img {
		border-radius: 50%;
		img {
			user-select: none;
			border-radius: 50%;
			filter: grayscale(100%);
			transition: all ease 0.5s;
			&:hover {
				filter: grayscale(0%);
				animation: submit 1s infinite;
			}
		}
	}
	.opinion-body {
		padding: 10px 0px;

		.name {
			display: block;
			font-weight: 800;
			font-size: 20px;
			margin-bottom: 5px;
		}
		.place {
			display: block;
			font-weight: 600;
			font-size: 18px;
		}
		.position {
			display: block;
			font-weight: 600;
			font-size: 16px;
			margin-bottom: 10px;
		}
		.text {
			font-weight: normal;
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
@media (max-width: 992px) {
	.opinion-modal {
		user-select: none;
		padding: 20px;
		.opinion-img {
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
		.opinion-text {
			padding: 10px 0px;
			display: flex;
			justify-content: center;
			.text {
				font-weight: 500;
				font-size: 14px;
			}
		}
	}
}
</style>
