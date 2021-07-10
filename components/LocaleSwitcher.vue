<template>
	<div class="top-header">
		<div class="container">
			<div class="row">
				<div class="col-lg-12" align="right">
					<NuxtLink to="/tr">
						<span>
							TR
						</span>
					</NuxtLink>

					/
					<NuxtLink to="/en">
						<span>
							EN
						</span>
					</NuxtLink>
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
	b {
		color: #00ff00;
	}
	span {
		color: #eee;
		-webkit-transition: all ease 0.5s;
		transition: all ease 0.5s;
		cursor: pointer;
		&:hover {
			color: #00ff00;
		}
	}
}
</style>
