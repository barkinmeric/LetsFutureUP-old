<template>
	<svg viewBox="0 0 56.69 56.69" xmlns="http://www.w3.org/2000/svg" :width="width" :height="height">
		<g fill="currentColor">
			<path
				d="M6.95,21.79h9.17v29.5H6.95V21.79z M11.54,7.13c2.93,0,5.31,2.38,5.31,5.32c0,2.93-2.38,5.31-5.31,5.31
			c-2.94,0-5.31-2.38-5.31-5.31C6.22,9.51,8.6,7.13,11.54,7.13"
			/>
			<path
				d="M21.87,21.79h8.8v4.04h0.13c1.22-2.32,4.21-4.76,8.68-4.76c9.29,0,11,6.11,11,14.05V51.3h-9.17V36.95
			c0-3.42-0.06-7.82-4.77-7.82c-4.77,0-5.5,3.73-5.5,7.58V51.3h-9.17V21.79z"
			/>
		</g>
	</svg>
</template>

<script>
export default {
	name: "IconLinkedin",
	props: {
		width: {
			type: [Number, String],
			default: 18,
		},
		height: {
			type: [Number, String],
			default: 18,
		},
	},
};
</script>

<style scoped>
svg {
	display: inline-block;
	vertical-align: baseline;
}
</style>
