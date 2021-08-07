<template>
	<div class="e-bulletin">
		<div class="container">
			<div class="e-bulletin-head">E-Bülten</div>
			<div class="e-bulletin-body">
				<div class="container">
					<div class="grid-container">
						<e-bulletin-item pdfName="MART 2021" pdfLink="/files/e-bulletin/03-2021.pdf" />
						<e-bulletin-item pdfName="ŞUBAT 2021" pdfLink="/files/e-bulletin/02-2021.pdf" />
						<e-bulletin-item pdfName="OCAK 2021" pdfLink="/files/e-bulletin/01-2021.pdf" />
						<e-bulletin-item pdfName="ARALIK 2020" pdfLink="/files/e-bulletin/12-2020.pdf" />
					</div>
				</div>
			</div>
			<e-bulletin-form />
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.e-bulletin {
	background: #eee;
	text-align: center;
	.e-bulletin-head {
		display: inline-block;
		padding: 20px 0px 10px 0px;
		font-size: 24px;
		font-weight: 600;
		border-bottom: 1px solid $mainColor;
		border-bottom-width: 3px;
		padding-bottom: 3px;
	}
	.e-bulletin-body {
		.grid-container {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
		}
	}
}
</style>
