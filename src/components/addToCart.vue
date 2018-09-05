<template>
	<div class="cart-block">
		<img src="../../static/img/components/product-icon.png">
		<button class="add-to-cart" @click="addToCart">Add to Cart</button>
	</div>
</template>
<script>
	import { mapState, mapActions } from 'vuex'
	export default {
		props: {
			product: {
				type: Object,
				default: {},
				required: true
			}
		},
		data () {
			return {

			}
		},
		methods: {
			addToCart () {
				let imgOffset = $('.cart-block img').offset()
				let cartOffset = $('#shopping-cart-icon').offset()
				let img = $('.cart-block img').attr('src')
				let flyer = $('<img class="flyer-img" width="50px" height="50px" src="' + img + '">')
				flyer.fly({
					start: {
						left: imgOffset.left,
						top: imgOffset.top
					},
					end: {
						left: cartOffset.left + 10,
						top: cartOffset.top + 10,
						width: 20,
						height: 20
					},
					onEnd: function() {
            this.destroy()
          }
				})
				setTimeout(() => {
					this.addProduct(this.product)
				}, 500)
			},
			...mapActions('cart', {
				addProduct: 'addToCart'
			})
		}
	}
</script>
<style lang="scss" scoped>
	.cart-block {
		display: flex;
		margin-top: 20px;
		img {
			margin-right: 60px;
			width: 40px;
			height: 40px;
		}
		button {
			&.add-to-cart {
				padding: 10px 20px;
				background-color: #41b883;
				cursor: pointer;
			}
		}
	}

</style>