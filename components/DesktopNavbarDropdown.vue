<template>
	<div class="desktop-navbar-dropdown">
		<h2 class="dropdown-button">{{ $t(`${tab}.title`) }}</h2>
		<ul class="dropdown-content">
			<li v-for="(item, index) in $t(`${tab}.content`)" :key="item">
				<NuxtLink :to="localePath(toUrl($t(`${tab}.content`, 'en')[index]))">
					<h3 class="text">{{ item }}</h3>
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "DesktopNavbarDropdown",
	props: {
		tab: String,
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
.desktop-navbar-dropdown {
	position: relative;
	display: inline-block;
	z-index: 15;
	&:hover {
		.dropdown-content {
			display: block;
		}
		.dropdown-button {
			background-color: $mainColor;
			color: #fff;
		}
	}
	.dropdown-button {
		margin: 0;
		padding: 16px;
		height: 70px;
		line-height: 40px;
		font-weight: 600;
		letter-spacing: 2px;
		font-size: 14px;
		background-color: #fff;
		color: $mainColor;
		cursor: pointer;
	}
	.dropdown-content {
		display: none;
		width: fit-content;
		min-width: 100%;
		position: absolute;
		top: 100%;
		left: 0;
		perspective: 1000px;
		background-color: white;
		animation: growDown 300ms ease-in-out forwards;
		transform-origin: top center;
		.text {
			white-space: nowrap;
			line-height: 25px;
			width: 100%;
			font-size: 12px;
			font-weight: 400;
			letter-spacing: 1px;
			color: #fff;
			padding: 12px 16px;
			color: $mainColor;
			&:hover {
				background-color: $mainColor;
				color: #fff;
			}
		}
	}
}
@keyframes growDown {
	0% {
		transform: scaleY(0);
	}
	80% {
		transform: scaleY(1.1);
	}
	100% {
		transform: scaleY(1);
	}
}
</style>
