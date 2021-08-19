<template>
	<div class="mentorship-collapsible">
		<button @click="toggleCollapsible = !toggleCollapsible" :class="{ active: toggleCollapsible }" type="button" class="collapsible">2020-2021</button>
		<div class="content" v-show="toggleCollapsible">
			<div class="mentorship-collapsible-item">
				<div class="container">
					<div class="title">{{ $t("mentorship.collapsible.mentors.title") }}</div>
					<div class="flex-container">
						<mentorship-modal v-for="item in $t('mentorship.collapsible.mentors.content')" :key="item" :name="item" />
					</div>
				</div>
			</div>
			<div class="mentorship-collapsible-item">
				<div class="container">
					<div class="title">{{ $t("mentorship.collapsible.mentees.title") }}</div>
					<div class="flex-container">
						<mentorship-modal v-for="item in $t('mentorship.collapsible.mentees.content')" :key="item" :name="item" />
					</div>
				</div>
			</div>
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
	.mentorship-collapsible-item {
		text-align: center;
		.title {
			display: inline-block;
			padding-top: 15px;
			color: black;
			font-weight: 500;
			font-size: 22px;
			border-bottom: 2px solid $sideColor;
		}
		.flex-container {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}
	}
}
</style>
