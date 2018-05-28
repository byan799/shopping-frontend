<template>
	<div id="carousel">
		<div class="nav wrapper-left">
			<div class="nav-left" @click="navPrev"></div>
		</div>
		<div class="img-slider" @mouseover="stopAutoPlay" @mouseout="autoPlay">
			<transition name="slider-trans">
				<img v-if="isShow" :src="slidersData[currentIndex].img">
			</transition>
			<transition name="slider-trans-prev">
				<img v-if="!isShow" :src="slidersData[currentIndex].img">
			</transition>
		</div>
		<div class="nav wrapper-right">
			<div class="nav-right" @click="navNext"></div>
		</div>
	</div>

</template>
<script>
	export default {
		props: {
			slidersData: {
				type: Array,
				default: []
			}
		},
		data () {
			return {
				currentIndex: 0,
				isShow: true,
				autoPlayIntervalTime: 1000,
				autoPlayIntervalId: undefined
			}
		},
		mounted () {
			this.autoPlay()
		},
		methods: {
			navPrev: function () {
				this.isShow = false
				setTimeout(() => {
					if (this.currentIndex === 0) {
						this.currentIndex = this.slidersData.length - 1
					} else {
						this.currentIndex--
					}
					this.isShow = true
				}, 10)
			},
			navNext: function () {
				this.isShow = false
				setTimeout(() => {
					if (this.currentIndex === this.slidersData.length -1) {
					this.currentIndex = 0
					} else {
						this.currentIndex++
					}
					this.isShow = true
				}, 10)
			},
			autoPlay: function () {
				this.autoPlayIntervalId = setInterval(() => {
					this.navNext()
				}, this.autoPlayIntervalTime)
			},
			stopAutoPlay: function () {
				clearInterval(this.autoPlayIntervalId)
			}
		}
	}
</script>
<style lang="scss" scoped>
	#carousel {
		width: 750px;
		height: 350px;
		margin: auto;
		position: relative;
		overflow: hidden;
		.img-slider {
			position: relative;
			img {
				width: 750px;
				height: 350px;
				position: absolute;
				top: 0;
				left: 0;
				display: block;
			}
		}
		.nav {
			position: absolute;
			top: 50%;
			margin-top: -25px;
			z-index: 999;
			width: 50px;
			height: 50px;
			&.wrapper-left {
				left: 0;
				.nav-left {
					width: 50px;
					height: 50px;
					background: url('/static/img/components/chevron-left.png') no-repeat;
					display: none;
				}
			}
			&.wrapper-right {
				right: 0;
				.nav-right {
					width: 50px;
					height: 50px;
					background: url('/static/img/components/chevron-right.png') no-repeat;
					display: none;
				}
			}
			&:hover {
				.nav-left,
				.nav-right {
					display: block;
					cursor: pointer;
				}
			}
		}
		.slider-trans-enter {
			transform: translateX(750px);
		}
		.slider-trans-enter-active {
			transition: all 0.5s;
		}
		.slider-trans-prev-leave-active {
			transform: translateX(-750px);
			transition: all 0.5s;
		}
	}
</style>






