<template>
	<div class="mobile-board">
		<div class="container">
			<div class="board-title">Danışma Kurulu</div>
			<div class="mobile-board-carousel" @mousedown="setDesktopCurrentX($event)" @mouseup="checkDesktopSlide($event)" @touchstart="setMobileCurrentX($event)" @touchend="checkMobileSlide($event)" tabindex="0">
				<board-modal v-show="index == 0" />
				<board-modal v-show="index == 1" />
				<board-modal v-show="index == 2" />
				<board-modal v-show="index == 3" />
				<board-modal v-show="index == 4" />
				<board-modal v-show="index == 5" />
				<board-modal v-show="index == 6" />
				<board-modal v-show="index == 7" />
				<div class="controller">
					<span @click="index = 0" class="dot" :style="index == 0 ? 'background-color:black;' : 'border-color:black;'"></span>
					<span @click="index = 1" class="dot" :style="index == 1 ? 'background-color:black;' : 'border-color:black;'"></span>
					<span @click="index = 2" class="dot" :style="index == 2 ? 'background-color:black;' : 'border-color:black;'"></span>
					<span @click="index = 3" class="dot" :style="index == 3 ? 'background-color:black;' : 'border-color:black;'"></span>
					<span @click="index = 4" class="dot" :style="index == 4 ? 'background-color:black;' : 'border-color:black;'"></span>
					<span @click="index = 5" class="dot" :style="index == 5 ? 'background-color:black;' : 'border-color:black;'"></span>
					<span @click="index = 6" class="dot" :style="index == 6 ? 'background-color:black;' : 'border-color:black;'"></span>
					<span @click="index = 7" class="dot" :style="index == 7 ? 'background-color:black;' : 'border-color:black;'"></span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "MobileBoard",
	data() {
		return {
			index: 0,
			slidesLength: 8,
			currentX: 0,
		};
	},

	mounted: function() {
		window.setInterval(() => this.next(), 5000);
	},

	methods: {
		next() {
			this.index++;
			if (this.index >= this.slidesLength) {
				this.index = 0;
			}
		},
		prev() {
			this.index--;
			if (this.index < 0) {
				this.index = this.slidesLength - 1;
			}
		},
		setDesktopCurrentX(event) {
			this.currentX = event.clientX;
		},
		setMobileCurrentX(event) {
			this.currentX = event.touches[0].clientX;
		},
		checkDesktopSlide(event) {
			if (this.currentX - event.clientX > 0) {
				this.next();
			} else if (this.currentX - event.clientX < 0) {
				this.prev();
			}
		},
		checkMobileSlide(event) {
			if (this.currentX - event.changedTouches[0].clientX > 0) {
				this.next();
			} else if (this.currentX - event.changedTouches[0].clientX < 0) {
				this.prev();
			}
		},
	},
};
</script>
<style lang="scss" scoped>
.mobile-board {
	background: #292929;
	color: #fff;
	padding-bottom: 40px;
	text-align: center;
	.board-title {
		padding: 20px 0px 10px 0px;
		font-size: 22px;
		font-weight: 600;
		display: inline-block;
		border-bottom: 1px solid $sideColor;
		border-bottom-width: 3px;
		padding-bottom: 3px;
	}
	.mobile-board-carousel {
		position: relative;
		text-align: center;
		width: 100%;
		max-height: 500px;
		.board-modal {
			cursor: grab;
			width: 100%;
			max-height: 475px;
			&:active {
				cursor: grabbing;
			}
			img {
				width: 100%;
				max-height: 475px;
			}
		}
		.controller {
			position: absolute;
			bottom: 4px;
			left: 50%;
			transform: translate(-50%, -50%);
			.dot {
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
	}
}
</style>
