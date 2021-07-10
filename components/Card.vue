<template>
	<section class="cards">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-12 card-item">
					<div class="card-head">
						<img :src="`https://picsum.photos/130/130?random=${item.title}`" alt="" />
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
	</section>
</template>

<script>
export default {
	name: "Card",
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
section.cards {
	padding: 10px;
	.card-item {
		padding: 10px;
		width: 100%;
		height: auto;
		display: -webkit-inline-box;
		display: -ms-inline-flexbox;
		display: inline-flex;
		background: #292929;
		border-radius: 10px;
		.card-head {
			width: 25%;
			img {
				border-radius: 10px;
			}
		}
		.card-body {
			width: 75%;
			position: relative;
			h2 {
				font-size: 18px;
				font-weight: 600;
				letter-spacing: 1px;
				padding: 5px 0px;
				color: #fff;
				text-transform: uppercase;
				position: relative;
				&::before {
					content: "";
					position: absolute;
					bottom: 0px;
					left: 0px;
					width: 50px;
					height: 2px;
					background: #00ff00;
				}
			}
			p {
				padding: 10px 0px;
				font-size: 14px;
				font-weight: 400;
				color: #eee;
			}
			span {
				position: absolute;
				bottom: 0px;
				right: 10px;
				color: #00ff00;
			}
		}
	}
}
</style>
