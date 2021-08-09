<template>
	<transition class="carousel-slider" :name="dir">
		<div v-show="visible">
			<slot></slot>
		</div>
	</transition>
</template>

<script>
export default {
	name: "CarouselSlider",
	data() {
		return {
			index: 0,
		};
	},
	computed: {
		visible() {
			return this.index === this.$parent.index;
		},
		dir() {
			return this.$parent.slideDirection;
		},
	},
};
</script>

<style lang="scss" scoped>
.carousel-slider {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
}

.slide-left-enter-active {
	animation: slide-left-in 0.5s ease-in;
}
.slide-left-leave-active {
	animation: slide-left-out 0.5s ease-in;
}

@keyframes slide-left-in {
	from {
		transform: translateX(-100%);
	}
	to {
		transform: translateX(0);
	}
}

@keyframes slide-left-out {
	from {
		transform: translateX(0%);
	}
	to {
		transform: translateX(100%);
	}
}

.slide-right-enter-active {
	animation: slide-right-in 0.5s ease-in;
}
.slide-right-leave-active {
	animation: slide-right-out 0.5s ease-in;
}
@keyframes slide-right-out {
	from {
		transform: translateX(0%);
	}
	to {
		transform: translateX(-100%);
	}
}
@keyframes slide-right-in {
	from {
		transform: translateX(100%);
	}
	to {
		transform: translateX(0);
	}
}
</style>
