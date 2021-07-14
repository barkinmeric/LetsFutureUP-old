<template>
	<div class="top-header">
		<div class="container">
			<div class="grid-container">
				<div>
					<NuxtLink to="/tr"><span>TR</span></NuxtLink>
					/
					<NuxtLink to="/en"><span>EN</span></NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "LocaleSwitcher",
};
</script>

<style lang="scss" scoped>
.top-header {
	width: 100%;
	height: 30px;
	background: #292929;
	color: #eee;
	font-size: 12px;
	line-height: 30px;
	.grid-container {
		display: grid;
		justify-content: end;
		margin-right: 16px;
		span {
			color: #eee;
			transition: all ease 0.5s;
			cursor: pointer;
			&:hover {
				color: $sideColor;
			}
		}
	}
}
</style>
