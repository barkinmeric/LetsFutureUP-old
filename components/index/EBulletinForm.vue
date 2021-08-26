<template>
	<div class="e-bulletin-form">
		<div class="container">
			<div class="grid-container">
				<div id="lottie"></div>
				<div class="form">
					<div class="head" v-html="$t('index.e-bulletin.text')"></div>
					<div class="body">
						<form name="e-journal" method="POST" data-netlify="true" data-netlify-recaptcha="true" netlify-honeypot="bot-field">
							<input type="email" name="email" placeholder="E-Mail" required />
							<!-- <input type="submit" name="subscribe" :value="$t('index.e-bulletin.button')" /> -->
							<button type="submit">{{ $t("index.e-bulletin.button") }}</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import lottie from "lottie-web";
export default {
	name: "EBulletinForm",
	components: { lottie },
	data() {
		return {
			animation: null,
		};
	},
	mounted() {
		setTimeout(function() {
			this.animation = lottie.loadAnimation({
				container: document.getElementById("lottie"),
				renderer: "svg",
				loop: true,
				autoplay: true,
				path: "/lottie/bulletin.json",
			});
		}, 2000);
	},
};
</script>

<style lang="scss" scoped>
.e-bulletin-form {
	.grid-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		#lottie {
			width: 100%;
			height: 100%;
		}
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
					input,
					button {
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
