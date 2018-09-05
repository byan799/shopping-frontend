<template>
	<div class="analysis">
		<div class="main-content">
			<h3>Analysis</h3>
			<p class="description">
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			</p>
			<div class="shopping-block">
				<div class="product-type">
					<label>Product Type</label>
					<div class="tab-select">
						<span class="tab" v-for="(item, index) in tabOptions" :key="index" @click="setItemProperty(item)" :class="{ 'active': productSelected.type === item.type}">{{ item.type }}</span>
					</div>
				</div>
				<div class="valid-period">
					<label>Expiration</label>
					<span class="period">2019-12-31</span>
				</div>
				<div class="price">
					<label>Price</label>
					<span class="price-value">{{ productSelected.price }}</span>
				</div>
				<div class="count">
					<label>Quantity</label>
					<InputNumber :min="1" :max="10" v-model="productSelected.quantity"></InputNumber>
				</div>
				<addToCart :product="productSelected"></addToCart>
			</div>
		</div>
		<div class="product-detail">
			<h3>Detail</h3>
			<p>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

				Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
			</p>
		</div>
	</div>
</template>
<script>
	import addToCart from '../../components/addToCart'
	export default {
		components: {
			addToCart
		},
		data () {
			return {
				tabOptions: [
					{
						type: "basic",
						price: 998
					},
					{
						type: "premium",
						price: 1999
					},
					{
						type: "export",
						price: 3999
					}
				],
				productSelected: {
					name: 'analysis',
					type: 'basic',
					price: 998,
					quantity: 1
				},
			}
		},
		methods: {
			setItemProperty (item) {
				this.$set(this.productSelected, 'type', item.type)
				this.$set(this.productSelected, 'price', item.price)
			}
		}
	}
</script>
<style lang="scss" scoped>
	.analysis {
		.main-content {
			padding: 30px;
			background-color: white;
			h3 {
				text-align: left;
				font-size: 20px;
			}
			.description {
				text-align: left;
				margin: 10px 0;
			}
			.product-type {
				text-align: left;
				label {
					display: inline-block;
					font-weight: bold;
					width: 90px;
				}
				.tab-select {
					display: inline-block;
					.tab {
						margin: 0 10px;
						padding: 5px 15px;
						cursor: pointer;
						&.active {
							background-color: #41b883;
						}
					}
				}
			}
			.district {
				text-align: left;
				margin: 20px 0;
				label {
					display: inline-block;
					font-weight: bold;
					width: 100px;
				}
				.ivu-select {
					display: inline-block;
					width: 200px;
				}
			}
			.valid-period {
				text-align: left;
				margin: 20px 0;
				label {
					font-weight: bold;
					width: 100px;
				}
			}
			.price {
				text-align: left;
				margin: 20px 0;
				label {
					font-weight: bold;
					width: 100px;
				}
			}
			.count {
				text-align: left;
				label {
					font-weight: bold;
					width: 100px;
				}
			}
		}
		.product-detail {
			margin-top: 20px;
			background-color: white;
			padding: 30px;
			text-align: left;
			h3 {
				font-size: 20px;
				margin-bottom: 10px;
			}
		}
	}
</style>