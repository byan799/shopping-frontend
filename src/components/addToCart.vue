<template>
	<div class="cart-block">
		<img src="../../static/img/components/product-icon.png">
		<button class="add-to-cart" @click="addToCart" :disabled="!getQuantity">Add to Cart</button>
		<span v-show="!getQuantity" class="tip">Out of Stock</span>
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
		created () {
			this.checkQuantity(this.product)
		},
		computed: {
			getQuantity () {
				if (this.$store.state.products.quantity[this.product.name][this.product.type]) {
					let productAvailable = this.$store.state.products.quantity[this.product.name][this.product.type]
					let productInCart = this.$store.state.cart.items.find((item) => {
						return item.name === this.product.name && item.type === this.product.type
					})
					if (productInCart) {
						if (productInCart.quantity >= productAvailable) {
							return false
						} else {
							return true
						}
					} else {
						return true
					}
				}
				return true
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
					this.checkQuantity(this.product)
				}, 500)
			},
			...mapActions({
				addProduct: 'cart/addToCart',
				checkQuantity: 'products/getItemQuantity'
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
			&:disabled {
				cursor: not-allowed;
			}
		}
		span {
			&.tip {
				line-height: 43px;
				margin-left: 20px;
				color: red;
			}
		}
	}

</style>