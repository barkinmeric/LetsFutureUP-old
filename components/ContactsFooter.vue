<template>
	<div class="contacts-footer">
		<div class="container">
			<div class="flex-container">
				<p>Let's FutureUP © 2020</p>
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
	background-color: #c4c4c4;
	font-size: 14px;
	.flex-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		p,
		a {
			padding: 5px;
		}
	}
}
</style>
