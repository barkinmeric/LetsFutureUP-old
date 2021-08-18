<template>
	<div class="mentorship-collapsible">
		<button @click="toggleCollapsible = !toggleCollapsible" :class="{ active: toggleCollapsible }" type="button" class="collapsible">2020-2021</button>
		<div class="content" v-show="toggleCollapsible">
			<mentorship-collapsible-item />
			<mentorship-collapsible-item />
		</div>
	</div>
</template>

<script>
export default {
	name: "MentorshipCollapsible",
	data() {
		return {
			toggleCollapsible: false,
		};
	},
	methods: {},
};
</script>

<style lang="scss" scoped>
.mentorship-collapsible {
	.collapsible {
		background-color: #eee;
		color: #444;
		cursor: pointer;
		padding: 18px;
		width: 100%;
		text-align: left;
		font-size: 15px;
		line-height: 30px;
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
}
</style>
