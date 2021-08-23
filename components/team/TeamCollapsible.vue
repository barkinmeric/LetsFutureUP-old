<template>
	<div class="team-collapsible">
		<button @click="toggleCollapsible = !toggleCollapsible" :class="{ active: toggleCollapsible }" type="button" class="collapsible">{{ item.title }}</button>
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
		color: #444;
		cursor: pointer;
		margin-top: 10px;
		width: 100%;
		text-align: left;
		line-height: 30px;
		font-size: 18px;
		font-weight: 550;
		letter-spacing: 1px;
		text-transform: uppercase;
		padding: 10px 18px 10px 0;
		color: #000;
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
</style>
