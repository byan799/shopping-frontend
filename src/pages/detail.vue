<template>
	<div class="detail">
		<div class="left-bar">
			<img :src="detailIcon">
			<ul class="link-list">
				<router-link v-for="(item,index) in details" tag="li" :to="item.link" :key="index" active-class="active">{{ item.name }}</router-link>
			</ul>
		</div>
		<div class="detail-content">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				details: [
					{
						name: '数据统计',
						link: '/detail/statistics'
					},
					{
						name: '数据预测',
						link: '/detail/forecast'
					},
					{
						name: '流量分析',
						link: '/detail/analysis'
					},
					{
						name: '广告发布',
						link: '/detail/advertise'
					}
				],
				iconMap: [


				]
			}
		},
		computed: {
			detailIcon () {

			}
		}
	}
</script>
<style lang="scss" scoped>
	.detail {
		width: 1200px;
		&:after {
			content: '';
			display: block;
			clear: both;
			visibility: hidden;
			overflow: hidden;
		}
		margin-top: 20px;
		.left-bar {
			width: 260px;
			margin: 0 20px;
			background-color: white;
			float: left;
			img {

			}
			.link-list {
				list-style: none;
				margin: 0;
				padding: 0;
				background-color: white;
				>li {
					text-align: left;
					padding: 10px 20px;
					cursor: pointer;
					&.active {
						background-color: #41b883;
					}
					&:hover {
						background-color: #41b883;
					}

				}
			}
		}
		.detail-content {
			width: 900px;
			float: right;
		}
	}
</style>