<template>
	<div class="mobile-navbar-dropdown">
		<div class="flex-container" @click="toggleDropdown()">
			<h2 class="dropdown-button">{{ $t(`${tab}.title`) }}</h2>
			<div class="down-icon">
				<icon-angle-down color="black" width="24px" height="24px" />
			</div>
		</div>
		<div class="dropdown-content" v-show="isDropdownActive">
			<NuxtLink v-for="(item, index) in $t(`${tab}.content`)" :key="item" :to="localePath(toUrl($t(`${tab}.content`, 'en')[index]))">
				<h3 class="text">{{ item }}</h3>
			</NuxtLink>
		</div>
	</div>
</template>

<script>
export default {
	name: "MobileNavbarDropdown",
	props: {
		tab: String,
	},
	data() {
		return {
			isDropdownActive: false,
		};
	},
	methods: {
		toggleDropdown() {
			this.isDropdownActive = !this.isDropdownActive;
		},
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
	watch: {
		$route(to, from) {
			this.isDropdownActive = false;
		},
	},
};
</script>

<style lang="scss" scoped>
.mobile-navbar-dropdown {
	.flex-container {
		cursor: pointer;
		display: flex;
		align-items: center;
		.dropdown-button {
			margin-right: auto;
			width: 100%;
			line-height: 40px;
			font-weight: 600;
			font-size: 14px;
			letter-spacing: 2px;
			background-color: #fff;
			color: $mainColor;
			cursor: pointer;
			padding: 12px 16px;
		}
		.down-icon {
			margin-left: auto;
			margin-right: 20px;
			cursor: pointer;
			width: 24px;
			height: 24px;
		}
		&:hover {
			background-color: $mainColor;
			color: #fff;
			.dropdown-button {
				background-color: $mainColor;
				color: #fff;
			}
			.down-icon {
				background-color: $mainColor;
				svg {
					color: white;
				}
			}
		}
	}
	.dropdown-content {
		background-color: #fff;
		width: 100%;
		z-index: 1;
		.text {
			letter-spacing: 1px;
			line-height: 25px;
			height: 100%;
			font-size: 12px;
			font-weight: 400;
			color: $mainColor;
			padding: 12px 16px;
			display: block;
		}
	}
}
</style>
