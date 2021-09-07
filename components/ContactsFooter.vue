<template>
	<div class="contacts-footer">
		<div class="container">
			<div class="flex-container">
				<p>Let's Future<span class="green">UP</span> © 2020</p>
				<a href="mailto:humanresources@letsfutureup.com">&#128231; humanresources@letsfutureup.com</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ContactsFooter",
};
</script>

<style lang="scss" scoped>
.contacts-footer {
	padding: 20px;
	background-color: #292929;
	font-size: 14px;
	.flex-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		p {
			color: #fff;
			padding: 5px;
			.green {
				color: $sideColor;
			}
		}
		a {
			color: #fff;
			padding: 5px;
		}
	}
}
</style>
