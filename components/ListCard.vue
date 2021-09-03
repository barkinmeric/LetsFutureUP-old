<template>
	<div class="list-card">
		<div class="container">
			<div class="card-item">
				<div class="card-head">
					<nuxt-img format="jpg" class="image" draggable="false" :src="item.image" :alt="item.image" height="180" width="180" />
				</div>
				<div class="card-body">
					<NuxtLink :to="`${localePath(section)}/${toUrl(item.title)}`"
						><h2 class="title">{{ item.title }}</h2>
					</NuxtLink>
					<p class="text">{{ truncate(item.text, 600) }}</p>
					<span class="date">{{ item.date }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ListCard",
	props: {
		item: Object,
		section: String,
	},
	methods: {
		toUrl(text) {
			return text
				.toLowerCase()
				.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
				.replace(/ /gim, "-")
				.replace(/--/gim, "-")
				.replace(/ğ/gim, "g")
				.replace(/ü/gim, "u")
				.replace(/ş/gim, "s")
				.replace(/ı/gim, "i")
				.replace(/ö/gim, "o")
				.replace(/ç/gim, "c");
		},
		truncate(str, len) {
			if (str.length > len && str.length > 0) {
				let new_str = str + " ";
				new_str = str.substr(0, len);
				new_str = str.substr(0, new_str.lastIndexOf(" "));
				new_str = new_str.length > 0 ? new_str : str.substr(0, len);
				return new_str + "...";
			}
			return str;
		},
	},
};
</script>

<style lang="scss" scoped>
.list-card {
	padding: 10px;
	.card-item {
		display: grid;
		grid-template-columns: 180px 1fr;
		justify-content: start;
		padding: 10px;
		height: auto;
		background: #292929;
		border-radius: 10px;
		.card-head {
			width: 180px;
			.image {
				user-select: none;
				border-radius: 10px;
			}
		}
		.card-body {
			padding-left: 16px;
			display: grid;
			grid-template-rows: auto auto auto;
			.title {
				display: inline-block;
				font-size: 18px;
				font-weight: 600;
				letter-spacing: 1px;
				padding: 5px 0px;
				color: #fff;
				border-bottom: 1px solid $sideColor;
				border-bottom-width: 3px;
				padding-bottom: 3px;
				text-transform: uppercase;
			}
			.text {
				margin: 10px 0px;
				font-size: 14px;
				font-weight: 400;
				color: #eee;
			}
			.date {
				padding-right: 10px;
				margin-bottom: 10px;
				align-self: center;
				text-align: right;
				color: $sideColor;
			}
		}
	}
}
@media (max-width: 767px) {
	.list-card {
		padding: 10px;
		.card-item {
			display: grid;
			grid-template-columns: 100%;
			padding: 10px;
			height: auto;
			background: #292929;
			border-radius: 10px;

			.card-head {
				margin: 0 auto;
				.image {
					border-radius: 10px;
				}
			}
			.card-body {
				padding-left: 0px;
				display: grid;
				grid-template-rows: auto auto auto;
				.title {
					display: inline-block;
					font-size: 18px;
					font-weight: 600;
					letter-spacing: 1px;
					padding: 5px 0px;
					color: #fff;
					text-transform: uppercase;
					border-bottom: 2px solid $sideColor;
					padding-bottom: 3px;
				}
				.text {
					margin: 10px 0px;
					font-size: 14px;
					font-weight: 400;
					color: #eee;
				}
				.date {
					padding-right: 10px;
					text-align: right;
					color: $sideColor;
				}
			}
		}
	}
}
</style>
