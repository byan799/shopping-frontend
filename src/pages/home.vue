<template>
	<div id="home">
		<div id="left-side-nav">
			<div class="left-wrapper">
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
		<div id="main">
			<div class="carousel">
				<Carousel :slidersData="slidersData"></Carousel>
			</div>
			<div class="board-list">
				<div class="board-item" v-for="item in boardList">
					<div class='board-icon' :class="item.id">
					</div>
					<div class="description">
						<h2>{{ item.title }}</h2>
						<p>{{ item.text }}</p>
						<a :href="item.href" class="button">立即购买</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Carousel from '@/components/carousel.vue'
	export default {
		data () {
			return {
				productList: {
					pc: {
						title: 'PC产品',
						list: [
							{
								name: '数据统计',
								href: '/detail/statistics'
							},
							{
								name: '数据预测',
								href: '/detail/forecast'
							},
							{
								name: '流量分析',
								href: '/detail/analysis'
							},
							{
								name: '广告发布',
								href: '/detail/advertise'
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
						href: '/detail/statistics'
					},
					{
						id: 'board-item-2',
						title: '品牌营销',
						text: '帮助你的产品更好地找到定位',
						href: '/detail/advertise'
					},
					{
						id: 'board-item-3',
						title: '使命必达',
						text: '永远保持最前端的速度',
						href: '/detail/forecast'
					},
					{
						id: 'board-item-4',
						title: '永攀高峰',
						text: '达到事业的顶峰',
						href: '/detail/analysis'
					}
				],
				slidersData: [
		        {
		          img: '/static/img/carousel/landscape-1.jpg'
		        },
		        {
		          img: '/static/img/carousel/landscape-2.jpg'
		        },
		        {
		          img: '/static/img/carousel/landscape-3.jpg'
		        },
		        {
		          img: '/static/img/carousel/landscape-4.jpg'
		        }
		      ]
			}
		},
	  components: {
	    Carousel
	  }
	}
</script>
<style lang="scss" scoped>
	#left-side-nav {
		width: 25%;
		float: left;
		box-sizing: border-box;
		padding: 0 20px;
		margin-top: 20px;
		.left-wrapper {
			background: white;
			h2 {
				background: #41b883;
				color: white;
				text-align: left;
				padding: 8px 20px;
			}
			.nav-block {
				border-bottom: 1px solid #f1f1f1;
				&:last-of-type {
					padding-bottom: 20px;
					border: 0;
				}
				h3 {
					text-align: left;
					padding: 8px 20px;
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
	}
	#main {
		width: 75%;
		float: right;
		.carousel {
			margin-top: 20px;
		}
		.board-list {
			margin-top: 20px;
			display: flex;
			flex-wrap: wrap;
			.board-item {
				width: 48%;
				display: flex;
		    align-items: center;
		    justify-content: space-around;
		    background: white;
		    min-height: 200px;
		    margin-bottom: 20px;
		    &:nth-child(1) {
					margin-right: 4%;
		    }
		    &:nth-child(3) {
		    	margin-right: 4%;
		    }
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
					p {
						margin: 10px 0;
					}
					a {
						&.button {
							display: block;
							width: 100px;
							text-align: center;
							padding: 8px 0;
						}
					}
				}
			}
		}
	}
</style>
