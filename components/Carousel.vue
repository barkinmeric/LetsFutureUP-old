<template>
	<div class="carousel" @keydown="checkSlide($event)" tabindex="0">
		<slot></slot>
		<div v-show="arrows" class="arrows">
			<button @click.prevent="next" class="btn btn-next">›</button>
			<button @click.prevent="prev" class="btn btn-prev">‹</button>
		</div>
		<div v-show="pagination" class="pagination">
			<span v-for="i in slidesLength" :key="i" @click="scroll(i - 1)" class="dot" :style="index == i - 1 ? 'background-color:black;' : 'border-color:black;'"></span>
		</div>
	</div>
</template>
<script>
export default {
	name: "Carousel",
	data() {
		return {
			index: 0,
			slides: [],
			slideDirection: "",
			slidesLength: 0,
		};
	},
	props: {
		arrows: Boolean,
		pagination: Boolean,
	},
	mounted() {
		this.slides = this.$children;
		this.slides.map((slide, index) => {
			slide.index = index;
		});
		this.slidesLength = this.slides.length;
	},
	methods: {
		next() {
			this.index++;
			if (this.index >= this.slidesLength) {
				this.index = 0;
			}
			this.slideDirection = "slide-right";
		},
		prev() {
			this.index--;
			if (this.index < 0) {
				this.index = this.slidesLength - 1;
			}
			this.slideDirection = "slide-left";
		},
		checkSlide(event) {
			if (event.keyCode === 39) {
				this.next();
			} else if (event.keyCode === 37) {
				this.prev();
			} else {
				return;
			}
		},
		scroll(i) {
			if (i < this.index) {
				this.slideDirection = "slide-left";
			} else if (i > this.index) {
				this.slideDirection = "slide-right";
			}
			this.index = i;
		},
	},
};
</script>
<style lang="scss" scoped>
.carousel {
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 500px;
	.pagination {
		position: absolute;
		bottom: -5px;
		left: 50%;
		transform: translate(-50%, -50%);
		.dot {
			margin: 0 2px;
			cursor: pointer;
			height: 15px;
			width: 15px;
			background-color: white;
			border: 1px solid black;
			border-radius: 50%;
			display: inline-block;
			&:hover {
				background-color: black;
				border-color: black;
			}
		}
	}
	.btn {
		padding: 5px 10px;
		background-color: rgba(0, 0, 0, 0.5);
		border: 1px solid transparent;
		margin: 5px 10px;
		color: #fff;
		height: 50px;
		width: 50px;
		position: absolute;
		margin-top: -25px;
		z-index: 2;
		&:hover {
			cursor: pointer;
		}
		&:focus {
			outline: none;
		}
	}
	.btn-next {
		font-size: 30px;
		font-weight: 600;
		top: 50%;
		right: 0;
	}
	.btn-prev {
		font-size: 30px;
		font-weight: 600;
		top: 50%;
		left: 0;
	}
}
</style>
