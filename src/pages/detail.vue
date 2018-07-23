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
						link: '/detail/statistics',
						icon: '../../static/img/images/1.png'
					},
					{
						name: '数据预测',
						link: '/detail/forecast',
						icon: '../../static/img/images/2.png'
					},
					{
						name: '流量分析',
						link: '/detail/analysis',
						icon: '../../static/img/images/3.png'
					},
					{
						name: '广告发布',
						link: '/detail/advertise',
						icon: '../../static/img/images/4.png'
					}
				],
				iconMap: [


				]
			}
		},
		computed: {
			detailIcon () {
				let path = this.$route.path
				for (let i in this.details) {
					if (path === this.details[i].link) {
						return this.details[i].icon
					}
				}
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
		margin: 20px 0;
		.left-bar {
			width: 260px;
			margin: 0 20px;
			background-color: white;
			float: left;
			img {
				width: 80px;
				margin-top: 10px;
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