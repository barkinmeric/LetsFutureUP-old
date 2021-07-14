<template>
	<div class="dropdown">
		<div class="container">
			<div class="flex-container" @click="toggleDropdown()">
				<button class="dropbtn">{{ $t(`${tab}.title`) }}</button>
				<icon-base color="black" icon-name="angle-down" iconViewBox="0 0 320 512"><icon-angle-down /></icon-base>
			</div>
			<div class="dropdown-content" v-show="isDropdownActive">
				<NuxtLink v-for="(item, index) in $t(`${tab}.content`)" :key="item" :to="localePath(toUrl($t(`${tab}.content`, 'en')[index]))">
					<span>{{ item }}</span>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script>
import IconAngleDown from "@/components/icons/IconAngleDown.vue";
export default {
	name: "NavbarDropdown",
	data() {
		return {
			isDropdownActive: false,
		};
	},
	components: { IconAngleDown },
	props: {
		tab: String,
	},
	watch: {
		$route(to, from) {
			this.isDropdownActive = false;
		},
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
};
</script>

<style lang="scss" scoped>
$anaRenk: #12203c;
.dropdown {
	.container {
		width: 100%;
		padding-right: 0.75rem;
		padding-left: 0.75rem;
		margin-right: auto;
		margin-left: auto;
		.flex-container {
			cursor: pointer;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.dropbtn {
				vertical-align: middle;
				left: 0;
				width: 100%;
				line-height: 40px;
				font-weight: 600;
				font-size: 12px;
				letter-spacing: 2px;
				background-color: #fff;
				color: $anaRenk;
				padding: 16px;
				border: none;
				cursor: pointer;
				text-align: left;
			}
			svg {
				vertical-align: middle;
				right: 0;
				margin-right: 16px;
			}
			&:focus-within {
				background-color: $anaRenk;
				color: #fff;
				.dropbtn {
					background-color: $anaRenk;
					color: #fff;
				}
				svg {
					background-color: $anaRenk;
					color: white;
				}
			}
		}
		.dropdown-content {
			background-color: #fff;
			width: 100%;
			z-index: 1;
			span {
				letter-spacing: 1px;
				white-space: nowrap;
				line-height: 25px;
				height: 100%;
				font-size: 12px;
				font-weight: 400;
				color: $anaRenk;
				padding: 12px 16px;
				text-decoration: none;
				display: block;
			}
		}
	}
}
</style>
