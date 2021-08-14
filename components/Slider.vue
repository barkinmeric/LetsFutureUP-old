<template>
	<div class="slider">
		<div class="slider-container" v-on="enableClick ? { click: next } : null">
			<slot></slot>
		</div>
		<div class="slider-controller">
			<div v-show="arrows" class="arrows">
				<button @click.prevent="next" class="btn btn-next">›</button>
				<button @click.prevent="prev" class="btn btn-prev">‹</button>
			</div>
			<div v-show="pagination" class="pagination">
				<span v-for="i in slidesLength" :key="i" @click="scroll(i - 1)" class="dot" :style="coordinate == (i - 1) * -100 ? 'background-color:black;' : null"></span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Slider",
	data() {
		return {
			coordinate: 0,
			slidesLength: 0,
		};
	},
	props: {
		enableClick: Boolean,
		arrows: Boolean,
		pagination: Boolean,
		autoplay: Boolean,
	},
	mounted() {
		this.slidesLength = this.$children.length;
		this.autoplay ? this.autoplayFunc() : null;
	},
	methods: {
		next() {
			this.coordinate -= 100;
			if (this.coordinate <= -100 * this.slidesLength) {
				this.coordinate = 0;
			}
			this.$children.forEach((item) => (item.$el.style.transform = `translateX(${this.coordinate}%)`));
		},
		prev() {
			this.coordinate += 100;
			if (this.coordinate >= 100) {
				this.coordinate = -100 * (this.slidesLength - 1);
			}
			this.$children.forEach((item) => (item.$el.style.transform = `translateX(${this.coordinate}%)`));
		},
		scroll(i) {
			this.coordinate = i * -100;
			this.$children.forEach((item) => (item.$el.style.transform = `translateX(${this.coordinate}%)`));
		},
		autoplayFunc() {
			window.setInterval(() => {
				this.next();
			}, 5000);
		},
	},
};
</script>

<style lang="scss" scoped>
.slider {
	position: relative;
	.slider-container {
		display: flex;
		overflow: hidden;
		flex-wrap: nowrap;
		flex-direction: row;
	}
	.slider-controller {
		.pagination {
			position: absolute;
			bottom: 2px;
			left: 50%;
			transform: translateX(-50%);
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
		.arrows {
			.btn {
				padding: 5px 10px;
				background-color: rgba(0, 0, 0, 0.5);
				border: 1px solid transparent;
				margin: 5px 10px;
				color: #fff;
				height: 50px;
				width: 50px;
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
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
				right: 0;
			}
			.btn-prev {
				font-size: 30px;
				font-weight: 600;
				left: 0;
			}
		}
	}
}
</style>
