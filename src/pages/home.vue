<template>
	<div id="home">
		<div id="left-side-nav">
			<div class="left-wrapper">
				<h2>All Products</h2>
				<template v-for="(product, index) in productList">
					<div class='nav-block'>
						<h4>{{ product.title }}</h4>
						<ul>
							<li v-for="item in product.list">
								<router-link :to="item.url">{{ item.name }}</router-link>
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
						<h4>{{ item.title }}</h4>
						<p>{{ item.text }}</p>
						<a :href="item.href" class="button">Detail</a>
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
						title: 'PC Product',
						list: [
							{
								name: 'Statistics',
								url: '/detail/statistics'
							},
							{
								name: 'Forecast',
								url: '/detail/forecast'
							},
							{
								name: 'Analysis',
								url: '/detail/analysis'
							},
							{
								name: 'Advertise',
								url: '/detail/advertise'
							}
						]
					},
					app: {
						title: 'Mobile APPs',
						list: [
							{
								name: 'Mobile Assistant',
								url: '/'
							},
							{
								name: 'Customed Apps',
								url: '/'
							},
							{
								name: 'Smart Map',
								url: '/'
							},
							{
								name: 'AI',
								url: '/'
							}
						]
					}
				},
				boardList: [
					{
						id: 'board-item-1',
						title: 'Statistics',
						text: 'Statistics for Commercial Strategy',
						href: '/detail/statistics'
					},
					{
						id: 'board-item-2',
						title: 'Advertise',
						text: 'Advertising for Marketing',
						href: '/detail/advertise'
					},
					{
						id: 'board-item-3',
						title: 'Forecast',
						text: 'Foreseeing the Future',
						href: '/detail/forecast'
					},
					{
						id: 'board-item-4',
						title: 'Analysis',
						text: 'Be the Top in the Field',
						href: '/detail/analysis'
					}
				],
				slidersData: [
		        {
		          img: '../../static/img/carousel/landscape-1.jpg'
		        },
		        {
		          img: '../../static/img/carousel/landscape-2.jpg'
		        },
		        {
		          img: '../../static/img/carousel/landscape-3.jpg'
		        },
		        {
		          img: '../../static/img/carousel/landscape-4.jpg'
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
				h4 {
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
						background: url('../../static/img/images/3.png') no-repeat;
						background-size: auto;
					}
					&.board-item-3 {
						background: url('../../static/img/images/2.png') no-repeat;
						background-size: auto;
					}
					&.board-item-4 {
						background: url('../../static/img/images/4.png') no-repeat;
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
							&:hover {
								color: white;
							}
						}
					}
				}
			}
		}
	}
</style>
