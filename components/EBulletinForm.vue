<template>
	<div class="e-bulletin-form">
		<div class="container">
			<div class="grid-container">
				<div class="lottie">
					<lottie :options="lottieOptions" v-on:animCreated="handleAnimation" />
				</div>
				<div class="form">
					<div class="head">
						ETKİNLİKLERDEN HABERDAR OLMAK İÇİN
						<br />
						E-BÜLTEN'E MAİL İLE KAYIT OL!
					</div>
					<div class="body">
						<form action="/mail" method="POST">
							<input type="email" name="mail" placeholder="Mail Adresiniz" required />
							<input type="submit" name="GONDER" value="BİZE KATIL!" />
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import lottie from "vue-lottie/src/lottie.vue";
import * as animationData from "~/static/lottie/bulletin.json";
export default {
	components: {
		lottie,
	},
	data() {
		return {
			anim: null, // for saving the reference to the animation
			lottieOptions: { animationData: animationData.default },
		};
	},
	methods: {
		handleAnimation: function(anim) {
			this.anim = anim;
		},
	},
};
</script>

<style lang="scss" scoped>
.e-bulletin-form {
	.grid-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		.form {
			display: inline-flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 20px 0px;
			.head {
				text-align: center;
				font-weight: 700;
				font-size: 20px;
			}
			.body {
				margin: 40px 0px 0px 0px;
				form {
					width: 100%;
					input {
						background: #12203c;
						border-radius: 0px;
						padding: 10px;
						color: #fff;
						width: 100%;
						margin: 5px 0px;
						&[type="submit"]:hover {
							cursor: pointer;
							animation: submit 1s infinite;
						}
					}
				}
			}
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
