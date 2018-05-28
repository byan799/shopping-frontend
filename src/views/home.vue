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
		<div id="main">
			<div class="carousel">
				
			</div>
			<div class="board-list">
				<div class="board-item" v-for="item in boardList">
					<div class='board-icon' :class="item.id">
					</div>
					<div class="description">
						<h2>{{ item.title }}</h2>
						<p>{{ item.text }}</p>
						<div class="action">
							<a href="" class="button">立即购买</a>
						</div>
					</div>
				</div>
			</div>
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
				},
				boardList: [
					{
						id: 'board-item-1',
						title: '开放产品',
						text: '开放产品是一款开放产品',
					},
					{
						id: 'board-item-2',
						title: '品牌营销',
						text: '帮助你的产品更好地找到定位'
					},
					{
						id: 'board-item-3',
						title: '使命必达',
						text: '永远保持最前端的速度'
					},
					{
						id: 'board-item-4',
						title: '永攀高峰',
						text: '达到事业的顶峰'
					}
				]
			}
		}
	}
</script>
<style lang="scss" scoped>
	#left-side-nav {
		width: 25%;
		float: left;
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
	#main {
		width: 75%;
		float: right;
		#test {
			width: 500px;
			height: 500px;
			background-color: red;
			#inner {
				width: 450px;
				height: 450px;
				background-color: blue;
				padding: 25px;
			}

		}
		.board-list {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			.board-item {
				width: 40%;
				display: flex;
		    align-items: center;
		    justify-content: space-around;
		    background: white;
		    margin: 20px;
		    padding: 40px 20px;
				.board-icon {
					width: 100px;
					height: 100px;
					&.board-item-1 {
						background: url('../../static/img/images/1.png') no-repeat;
						background-size: auto;
					}
					&.board-item-2 {
						background: url('../../static/img/images/2.png') no-repeat;
						background-size: auto;
					}
					&.board-item-3 {
						background: url('../../static/img/images/3.png') no-repeat;
						background-size: auto;
					}
					&.board-item-4 {
						background: url('../../static/img/images/3.png') no-repeat;
						background-size: auto;
					}
				}
				.description {
					width: 60%;
					text-align: left;
				}
			}
		}
	}
</style>
