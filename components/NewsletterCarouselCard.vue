<template>
	<div class="newsletter-carousel-card">
		<div class="container">
			<div class="card-item">
				<div class="card-head">
					<nuxt-img draggable="false" src="/img/placeholder.png" height="180" width="280" alt="" />
				</div>
				<div class="card-body">
					<NuxtLink :to="`${localePath(section)}/${toUrl(item.title)}`"
						><h2>{{ item.title }}</h2>
					</NuxtLink>
					<p>{{ truncate(item.text, 200) }}</p>
					<span>{{ item.date }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "NewsletterCarouselCard",
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
.newsletter-carousel-card {
	padding: 10px;
	.card-item {
		display: grid;
		grid-template-columns: 280px 1fr;
		justify-content: start;
		padding: 10px;
		height: auto;
		background: #12203c;
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
@media (max-width: 1199px) {
	.newsletter-carousel-card {
		padding: 10px;
		.card-item {
			display: grid;
			grid-template-columns: 100%;
			justify-content: center;
			padding: 10px;
			height: auto;
			background: #12203c;
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
