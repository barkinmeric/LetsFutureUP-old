<template>
	<div class="team-collapsible">
		<h3 @click="toggleCollapsible = !toggleCollapsible" :class="{ active: toggleCollapsible }" class="collapsible">{{ item.title }}</h3>
		<div class="content" v-if="toggleCollapsible">
			<div class="team-collapsible-item">
				<div class="container">
					<div class="flex-container">
						<team-modal v-for="item in item.collapsible" :key="item.name" :item="item" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "TeamCollapsible",
	data() {
		return {
			toggleCollapsible: false,
		};
	},
	props: {
		item: Object,
	},
};
</script>

<style lang="scss" scoped>
.team-collapsible {
	.collapsible {
		background-color: #eee;
		color: #000;
		cursor: pointer;
		width: 100%;
		text-align: left;
		line-height: 30px;
		font-size: 16px;
		font-weight: 500;
		letter-spacing: 1px;
		padding: 10px 20px;
		text-transform: uppercase;
		&:after {
			content: "\002B";
			color: black;
			font-size: 30px;
			font-weight: bold;
			float: right;
			margin-left: 5px;
		}
		&:hover {
			background-color: #ccc;
		}
	}
	.active {
		background-color: #ccc;
		&:after {
			content: "\2212";
		}
	}
	.content {
		padding: 0 18px;
		overflow: hidden;
		background-color: #f1f1f1;
	}
	.team-collapsible-item {
		text-align: center;
		.flex-container {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}
	}
}
@media (max-width: 768px) {
	.team-collapsible {
		.collapsible {
			font-size: 14px;
		}
	}
}
</style>
