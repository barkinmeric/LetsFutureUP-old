<template>
	<div class="test">
		<slider :pagination="true" :arrows="true">
			<slider-inner>
				<div class="slide-img">
					<video class="video" controls poster="/img/carousel/carousel1-tr.png" autoplay>
						<source src="/videos/tr.mp4" type="video/mp4" />
					</video>
				</div>
			</slider-inner>
			<slider-inner>
				<div class="slide-img">
					<nuxt-img draggable="false" src="/img/carousel/carousel2.png" alt="carousel2" />
				</div>
			</slider-inner>
			<slider-inner>
				<div class="slide-img">
					<nuxt-img draggable="false" src="/img/carousel/carousel3.png" alt="carousel3" />
				</div>
			</slider-inner>
		</slider>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.slide-img {
	height: 100%;
	width: 100%;
	max-height: 500px;
	img,
	video {
		max-height: 500px;
		height: 100%;
		width: 100%;
		cursor: pointer;
	}
}
</style>
