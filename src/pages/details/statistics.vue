<template>
	<div class="statistics">
		<div class="main-content">
			<h3>数据统计</h3>
			<p class="description">
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			</p>
			<div class="shopping-block">
				<div class="product-type">
					<label>产品类型</label>
					<div class="tab-select">
						<span class="tab" v-for="(item, index) in tabOptions" :key="index" @click="productSelect = item" :class="{ 'active': productSelect === item}">{{ item.type }}</span>
					</div>
				</div>
				<div class="district">
					<label>适用地区</label>
					<Select v-model="districtSelect">
						<Option v-for="item in district" :value="item.value" :key="item.value">{{ item.label }}</Option>
					</Select>
				</div>
				<div class="valid-period">
					<label>有效期</label>
					<span class="period">半年</span>
				</div>
				<div class="price">
					<label>价格</label>
					<span class="price-value">{{ productSelect.price }}</span>
				</div>
				<div class="count">
					<label>数量</label>
					<InputNumber :min="1" :max="10" v-model="count"></InputNumber>
				</div>
			</div>
		</div>
		<div class="product-detail">
			<h3>产品信息</h3>
			<p>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

				Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
			</p>
		</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				tabOptions: [
					{
						type: "普通版",
						price: 500
					},
					{
						type: "特别版",
						price: 899
					},
					{
						type: "白金版",
						price: 1299
					}
				],
				district: [
					{
						label: '北京',
						value: 'Beijing'
					},
					{
						label: '上海',
						value: 'Shanghai'
					},
					{
						label: '重庆',
						value: 'Chongqing'
					},
					{
						label: '武汉',
						value: 'Wuhan'
					},
					{
						label: '杭州',
						value: 'Hangzhou'
					}
				],
				productSelect: {},
				districtSelect: '',
				count: 1				
			}
		},
		created () {
			this.productSelect = this.tabOptions[0]
		}
	}
</script>
<style lang="scss" scoped>
	.statistics {
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
				margin: 20px 0;
				text-align: left;
				label {
					display: inline-block;
					font-weight: bold;
					margin-right: 20px;
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
					margin-right: 30px;
					font-weight: bold;
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
					margin-right: 45px;
				}
			}
			.price {
				text-align: left;
				margin: 20px 0;
				label {
					font-weight: bold;
					margin-right: 60px;
				}
			}
			.count {
				text-align: left;
				label {
					font-weight: bold;
					margin-right: 60px;
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