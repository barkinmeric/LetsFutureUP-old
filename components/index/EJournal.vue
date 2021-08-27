<template>
	<div class="e-journal">
		<div class="container">
			<div class="e-journal-head">{{ $t("index.e-journal.title") }}</div>
			<div class="e-journal-body">
				<div class="large">
					<div class="flex-container">
						<e-journal-item :item="$t('index.e-journal.content')[3]" />
						<e-journal-item :item="$t('index.e-journal.content')[2]" />
						<e-journal-item :item="$t('index.e-journal.content')[1]" />
						<e-journal-item :item="$t('index.e-journal.content')[0]" />
					</div>
				</div>
				<div class="medium">
					<slider :pagination="true" :autoplay="5000">
						<slider-inner>
							<div class="flex-container">
								<e-journal-item :item="$t('index.e-journal.content')[3]" />
								<e-journal-item :item="$t('index.e-journal.content')[2]" />
							</div>
						</slider-inner>
						<slider-inner>
							<div class="flex-container">
								<e-journal-item :item="$t('index.e-journal.content')[1]" />
								<e-journal-item :item="$t('index.e-journal.content')[0]" />
							</div>
						</slider-inner>
					</slider>
				</div>
				<div class="small">
					<slider :pagination="true" :autoplay="5000">
						<slider-inner>
							<div class="flex-container">
								<e-journal-item :item="$t('index.e-journal.content')[3]" />
							</div>
						</slider-inner>
						<slider-inner>
							<div class="flex-container">
								<e-journal-item :item="$t('index.e-journal.content')[2]" />
							</div>
						</slider-inner>
						<slider-inner>
							<div class="flex-container">
								<e-journal-item :item="$t('index.e-journal.content')[1]" />
							</div>
						</slider-inner>
						<slider-inner>
							<div class="flex-container">
								<e-journal-item :item="$t('index.e-journal.content')[0]" />
							</div>
						</slider-inner>
					</slider>
				</div>
			</div>
			<div class="container">
				<div class="grid-container">
					<e-journal-lottie />
					<e-journal-form />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "EJournal",
};
</script>

<style lang="scss" scoped>
.e-journal {
	background: #eee;
	text-align: center;
	.e-journal-head {
		display: inline-block;
		padding: 20px 0px 10px 0px;
		font-size: 24px;
		font-weight: 600;
		border-bottom: 1px solid $sideColor;
		border-bottom-width: 3px;
		padding-bottom: 3px;
	}
	.e-journal-body {
		.large {
			display: none;
		}
		.medium {
			display: none;
		}
		.small {
			display: block;
		}
		.flex-container {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}
	}
	.grid-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}
}

@media (min-width: 768px) {
	.e-journal {
		.e-journal-body {
			.large {
				display: none;
			}
			.medium {
				display: block;
			}
			.small {
				display: none;
			}
		}
	}
}
@media (min-width: 1400px) {
	.e-journal {
		.e-journal-body {
			.large {
				display: block;
			}
			.medium {
				display: none;
			}
			.small {
				display: none;
			}
		}
	}
}
</style>
