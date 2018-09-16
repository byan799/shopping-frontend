<template>
	<div id="shopping-cart">
		<h3>Shopping Cart</h3>
		<div v-if="products.length" class="shopping-items">
			<div v-for="(item,index) in products" class="item">
				<div class="property name">
					<span class="label">Product</span>
					<span class="value">{{ item.name }}</span>
				</div>
				<div class="property type">
					<span class="label">Type</span>
					<span class="value">{{ item.type }}</span>
				</div>
				<div class="property quantity">
					<span class="label">Quantity</span>
					<span class="value">
						<InputNumber :min="1" :max="item.max" v-model="item.quantity"></InputNumber>
					</span>
				</div>
				<div class="property remove" @click="removeItem(index)">Remove
				</div>
			</div>
		</div>
		<div v-else class="no-items">
			<p>Your shopping cart is empty.</p>
		</div>
	</div>
</template>
<script>
	import { mapState, mapGetters, mapActions } from 'vuex'
	export default {
		computed: {
			...mapState('cart', {
				products: state => state.items
			})
		},
		updated () {
			this.getEachMax()
		},
		mounted () {
			this.getEachMax()
		},
		methods: {
			getEachMax () {
				this.products.forEach(item => {
					item.max = this.getOneMax()(item)
					// this.$store.getters['products/getMax'](item)
				})
			},
			...mapGetters ('products', {
				getOneMax: 'getMax'
			}),
			...mapActions ('cart', {
				removeItem: 'removeFromCart'
			})
		}
	}
</script>
<style lang="scss" scoped>
	#shopping-cart {
		h3 {
			margin: 20px;
			text-align: left;
		}
		.item {
			text-align: left;
			padding: 20px;
			border-top: 1px solid #dedcdc;
			.property {
				display: inline-block;
				width: 200px;
				.label {
					font-size: 16px;
					font-weight: bold;
					margin-right: 20px;
				}
				.value {
					font-size: 16px;
				}
				&.remove {
					width: auto;
					padding: 5px 20px;
					background-color: #acacb3;
					color: white;
					border-radius: 3px;
					cursor: pointer;
				}
			}
		}
		.no-items {
			p {
				text-align: left;
				margin: 30px;
			}
		}
	}
</style>
