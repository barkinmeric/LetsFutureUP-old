<template>
	<div class="motto">
		<div class="container"><p v-html="$t('index.motto')"></p></div>
	</div>
</template>

<script>
export default {
	name: "Motto",
};
</script>

<style lang="scss" scoped>
.motto {
	width: 100%;
	font-weight: 500;
	text-align: center;
	padding: 20px 0px;
	background: #292929;
	color: #fff;
	letter-spacing: 1px;
}
</style>
