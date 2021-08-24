<template>
	<div class="join-us">
		<div class="container">
			<div class="grid-container">
				<div class="text">
					<div class="text-head">{{ $t("index.join-us.title") }}</div>
					<div class="text-body" v-html="$t('index.join-us.text')"></div>
				</div>
				<div class="button">
					<a :href="$t('index.join-us.link')" target="_blank" rel="noopener">
						<button>{{ $t("index.join-us.button") }}</button>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.join-us {
	padding: 10px;
	background: #12203c;
	color: #fff;
	.grid-container {
		display: grid;
		grid-template-columns: 66% 34%;
		.text {
			padding: 20px 0px;
			text-align: center;
			.text-head {
				display: inline-block;
				font-size: 20px;
				font-weight: 800;
				border-bottom: 1px solid $sideColor;
				border-bottom-width: 3px;
			}
			.text-body {
				font-size: 14px;
				font-weight: 500;
			}
		}

		.button {
			padding: 20px 0px;
			text-align: center;
			a {
				height: 100%;
				width: 100%;
				button {
					cursor: pointer;
					width: 70%;
					padding: 20px 0px;
					font-weight: 700;
					border-radius: 20px;
					background: #fff;
					animation: join 2s infinite;
				}
			}
		}
	}
}
@media (max-width: 1200px) {
	.join-us {
		.grid-container {
			display: grid;
			grid-template-columns: 100%;
		}
	}
}
@keyframes join {
	0% {
		box-shadow: 0px 0px 0px 0px rgba(0, 255, 0, 0.7);
		transform: scale(1);
	}
	70% {
		box-shadow: 0px 0px 0px 15px rgba(0, 255, 0, 0);
		transform: scale(0.9);
	}
	100% {
		box-shadow: 0px 0px 0px 0px rgba(0, 255, 0, 0);
		transform: scale(1);
	}
}
</style>
