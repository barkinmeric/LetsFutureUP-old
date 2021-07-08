<template>
	<div class="dropdown">
		<button class="dropbtn">{{ title }}</button>
		<div class="dropdown-content">
			<router-link v-for="item in content" :key="item" :to="`/${toUrl(item)}`">
				<span>{{ item }}</span>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "NavbarDropdown",
	props: {
		title: String,
		content: Array,
	},
	methods: {
		toUrl(text) {
			return text
				.toLowerCase()
				.replace(/ /gim, "-")
				.replace(/ğ/gim, "g")
				.replace(/ü/gim, "u")
				.replace(/ş/gim, "s")
				.replace(/ı/gim, "i")
				.replace(/ö/gim, "o")
				.replace(/ç/gim, "c");
		},
	},
};
</script>

<style lang="scss" scoped>
$anaRenk: #12203c;

.dropdown {
	position: relative;
	display: inline-block;
	transition: all ease 0.2s;
	&:hover {
		.dropdown-content {
			transform: translateY(0);
			visibility: visible;
			span {
				color: $anaRenk;
				transform: translateY(0);
				visibility: visible;
			}
		}
		.dropbtn {
			background-color: $anaRenk;
			color: #fff;
		}
	}
	.dropbtn {
		height: 100%;
		line-height: 40px;
		font-weight: 600;
		font-size: 12px;
		letter-spacing: 2px;
		transition: all ease 0.2s;
		background-color: #fff;
		color: $anaRenk;
		padding: 16px;
		border: none;
		cursor: pointer;
	}
	.dropdown-content {
		transition: all ease 0.2s;
		transform: translateY(25%);
		visibility: hidden;
		position: absolute;
		background-color: #fff;
		min-width: 100%;
		z-index: 1;
		span {
			letter-spacing: 1px;
			white-space: nowrap;
			line-height: 25px;
			height: 100%;
			font-size: 12px;
			font-weight: 400;
			transition: all ease 0.2s;
			transform: translateY(25%);
			color: #fff;
			padding: 12px 16px;
			text-decoration: none;
			visibility: hidden;
			display: block;
			&:hover {
				background-color: $anaRenk;
				color: #fff;
			}
		}
	}
}

// a,
// .menu {
// 	cursor: pointer;
// 	padding-left: 20px;
// 	font-size: 12px;
// 	padding-right: 20px;
// 	letter-spacing: 2px;
// 	font-weight: 600;
// 	transition: all ease 0.4s;
// 	&:hover {
// 		background: $anaRenk;
// 		color: #fff;
// 	}
// }
// .menu {
// 	position: relative;
// 	&:hover {
// 		.drop-menu {
// 			z-index: 5;
// 			opacity: 1;
// 			top: 70px;
// 			visibility: visible;
// 		}
// 	}
// 	.drop-menu {
// 		background: #fff;
// 		left: 0px;
// 		min-width: 100%;
// 		display: flex;
// 		flex-direction: column;
// 		position: absolute;
// 		top: 100px;
// 		z-index: -1;
// 		opacity: 0;
// 		visibility: hidden;
// 		transition: all ease 0.6s;
// 		a {
// 			letter-spacing: 1px;
// 			white-space: nowrap;
// 			width: 100%;
// 			height: 50px;
// 			line-height: 50px;
// 			font-size: 12px;
// 			font-weight: 400;
// 		}
// 	}
// }
</style>
