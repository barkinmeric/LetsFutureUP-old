<template>
	<div class="slider-inner">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "SliderInner",
};
</script>

<style lang="scss" scoped>
.slider-inner {
	flex-shrink: 0;
	transition: transform 1s ease;
	width: 100%;
}
</style>
