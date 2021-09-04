<template>
	<div class="e-journal-form">
		<div class="head" v-html="$t('index.e-journal.text')"></div>
		<div class="body">
			<form action="https://app.us5.list-manage.com/subscribe/post?u=bab5f94ae1024031672a7ea3b&amp;id=f65d4afdf1" name="mc-embedded-subscribe-form" method="post" target="_blank" novalidate rel="noopener">
				<input type="email" name="EMAIL" placeholder="E-Mail" required />
				<button type="submit" name="subscribe">{{ $t("index.e-journal.button") }}</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: "EJournalForm",
};
</script>

<style lang="scss" scoped>
.e-journal-form {
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
			}
			button {
				background: #12203c;
				border-radius: 0px;
				padding: 10px;
				color: #fff;
				width: 100%;
				margin: 5px 0px;
				&:hover {
					cursor: pointer;
					animation: submit 1s infinite;
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
