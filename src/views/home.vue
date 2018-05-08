<template>
	<div id="home">
		<div id="left-side-nav">
			<h2>全部产品</h2>
			<template v-for="(product, index) in productList">
				<div class='nav-block'>
					<h3>{{ product.title }}</h3>
					<ul>
						<li v-for="item in product.list">
							<a :href="item.url">{{ item.name }}</a>
						</li>
					</ul>
				</div>
			</template>
		</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				productList: {
					pc: {
						title: 'PC产品',
						list: [
							{
								name: '数据统计',
								url: ''
							},
							{
								name: '数据预测',
								url: ''
							},
							{
								name: '流量分析',
								url: ''
							},
							{
								name: '广告发布',
								url: ''
							}
						]
					},
					app: {
						title: '手机应用类',
						list: [
							{
								name: '91助手',
								url: ''
							},
							{
								name: '产品助手',
								url: ''
							},
							{
								name: '智能地图',
								url: ''
							},
							{
								name: '团队语音',
								url: ''
							}
						]
					}
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	#left-side-nav {
		width: 25%;
		background: white;
		h2 {
			background: #41b883;
			color: white;
			text-align: left;
			padding-left: 20px;
		}
		.nav-block {
			border-bottom: 1px solid #f1f1f1;
			&:last-of-type {
				padding-bottom: 20px;
				border: 0;
			}
			h3 {
				text-align: left;
				padding-left: 20px;
			}
			ul {
				padding-left: 25px;
				>li {
					list-style: none;
					text-align: left;
					margin: 5px 0; 
					a {
						text-decoration: none;
						color: black;
					}
				}
			}
		}
	}
</style>
