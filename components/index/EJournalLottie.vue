<template>
	<div class="e-journal-lottie">
		<div id="lottie"></div>
	</div>
</template>

<script>
import lottie from "lottie-web";
export default {
	name: "EJournalLottie",
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
				path: "/lottie/journal.json",
			});
		}, 2000);
	},
};
</script>

<style lang="scss" scoped>
.e-journal-lottie {
	#lottie {
		width: 100%;
		height: 100%;
	}
}
</style>
