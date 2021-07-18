<template>
	<div class="list-card">
		<div class="container">
			<div class="card-item">
				<div class="card-head">
					<img :src="`https://picsum.photos/280/180?random=${item.title}`" alt="" />
				</div>
				<div class="card-body">
					<NuxtLink :to="`${localePath(section)}/${toUrl(item.title)}`"
						><h2>{{ item.title }}</h2>
					</NuxtLink>
					<p>{{ item.text }}</p>
					<span>{{ item.date }}</span>
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
.list-card {
	padding: 10px;
	.card-item {
		display: grid;
		grid-template-columns: 280px 1fr;
		justify-content: start;
		padding: 10px;
		height: auto;
		background: #292929;
		border-radius: 10px;
		.card-head {
			width: 280px;
			img {
				border-radius: 10px;
			}
		}
		.card-body {
			padding-left: 16px;
			display: grid;
			grid-template-rows: auto auto auto;
			h2 {
				display: inline-block;
				font-size: 18px;
				font-weight: 600;
				letter-spacing: 1px;
				padding: 5px 0px;
				color: #fff;
				text-transform: uppercase;
				border-bottom: 1px solid $sideColor;
				border-bottom-width: 3px;
				padding-bottom: 3px;
			}
			p {
				margin: 10px 0px;
				font-size: 14px;
				font-weight: 400;
				color: #eee;
			}
			span {
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
			justify-content: center;
			padding: 10px;
			height: auto;
			background: #292929;
			border-radius: 10px;

			.card-head {
				margin: 0 auto;
				img {
					border-radius: 10px;
				}
			}
			.card-body {
				padding-left: 0px;
				display: grid;
				grid-template-rows: auto auto auto;
				h2 {
					display: inline-block;
					font-size: 18px;
					font-weight: 600;
					letter-spacing: 1px;
					padding: 5px 0px;
					color: #fff;
					text-transform: uppercase;
					border-bottom: 1px solid $sideColor;
					border-bottom-width: 2px;
					padding-bottom: 3px;
				}
				p {
					margin: 10px 0px;
					font-size: 14px;
					font-weight: 400;
					color: #eee;
				}
				span {
					padding-right: 10px;
					text-align: right;
					color: $sideColor;
				}
			}
		}
	}
}
</style>
