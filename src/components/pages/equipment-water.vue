<template>
	<div>
		<nav class="navBar">
			<p class="navBar-tit icon4">用水量</p>
			<a href="#" class="back" onclick="javascript:history.back(-1)"></a>
		</nav>

		<!-- content -->
		<section id="waterConsumption" class="cartridge">
			<div class="inner">
				<div class="tabs">
					<a class="cur" href="javascript:;">周</a>
					<a href="javascript:;">月</a>
					<a href="javascript:;">年</a>
				</div>

				<section class="tabContent">
					<!-- tit -->
					<div class="tit">净水使用量</div>
					<!-- 流量使用量 -->
					<div class="amountType">
						<div class="type">
							<p class="top">今日流量</p>
							<p class="bottom">0L</p>
						</div>
						<div class="type">
							<p class="top">周流量</p>
							<p class="bottom">7L</p>
						</div>
						<div class="type">
							<p class="top">平均流量</p>
							<p class="bottom">1L</p>
						</div>
					</div>

					<!-- line chart -->
					<div class="chart-mask week">
						<!-- 切换成 ‘月’ 统计的时候  给chart-mask 添加‘month’类  -->
						<div id="chart" class="chart"></div>
						<p class="text">使用量（ L ）</p>
					</div>

				</section>

			</div>
		</section>
	</div>
</template>

<script>
	import echarts from "echarts";
	export default {
		name: "",
		data() {
			return {

			}
		},
		mounted() {
			this.initCharts("chart")
		},
		methods: {
			initCharts(id) {

				var dataX = ['30', '31', '01', '02', '03', '04', '05'];
				var dataValue = [0, 0.8, 0.9, 1.3, 1, 3.2, 2.8];
				var dom = document.getElementById(id);
				var myChart = echarts.init(dom);
				var app = {};
				var option = {
					width: '100%',
					height: '146',
					grid: {
						left: '8',
						right: '0%',
						top: '30',
						containLabel: true
					},
					xAxis: [{
							type: 'category',
							boundaryGap: [0, '100%'],
							data: dataX,
							silent: true,
							axisLine: {
								lineStyle: {
									color: '#f1f4fb'
								}
							},
							axisLabel: {
								textStyle: {
									color: '#8e9091'
								}
							},
							splitLine: {
								show: false
							}
						}

					],
					yAxis: [{
						type: 'value',
						minInterval: 1,
						axisLine: {
							lineStyle: {
								color: '#f1f4fb'
							}
						},
						axisLabel: {
							textStyle: {
								color: '#8e9091'
							}
						},
						splitLine: {
							lineStyle: {
								type: 'dashed',
								color: '#dfe5ef'
							}
						}
					}],
					series: [{
						name: '邮件营销',
						type: 'line',
						stack: '总量',
						// symbolSize: 5,
						symbol: 'none',
						itemStyle: { // 数据线条颜色
							normal: {
								color: '#1495eb'
							}
						},
						areaStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: 'rgba(20,149,235,0.3)'
								}, {
									offset: 1,
									color: 'rgba(20,149,235,0.2)'
								}])
							}
						},
						data: dataValue
					}]
				}; //折线图的配置
				if(option && typeof option === "object") {
					myChart.setOption(option, true);
				}
			}
		}
	}
</script>

<style scoped>
	#waterConsumption {
		padding-top: 44px;
	}
	
	.inner {
		padding: 10px;
	}
	
	.tabs {
		height: 35px;
		background: #ffffff;
		border-radius: 5px;
		display: flex;
		justify-content: space-around;
		padding: 0 75px;
		line-height: 35px;
		box-shadow: 0 6px 12px rgba(186, 202, 210, 0.5);
		margin-bottom: 20px;
	}
	
	.tabs a {
		text-align: center;
		width: 30px;
		color: #121214;
	}
	
	.tabs a.cur {
		border-bottom: 1px solid #0076ff;
	}
	
	.tabContent {
		background: #f1f4fb;
		border-radius: 5px;
		padding: 11px 0;
	}
	
	.tabContent .tit {
		font-size: 14px;
		color: #0076ff;
		margin-bottom: 20px;
		margin-left: 9px;
	}
	
	.tabContent .amountType {
		display: flex;
		justify-content: space-between;
		margin-bottom: 30px;
		border-bottom: 1px solid #e5eaf3;
		padding: 0 9px;
	}
	
	.tabContent .amountType .type {
		text-align: center;
	}
	
	.tabContent .amountType .top {
		font-size: 13px;
		margin-bottom: 8px;
	}
	
	.tabContent .amountType .bottom {
		font-size: 20px;
		color: #0076ff;
		font-weight: 400;
		margin-bottom: 24px;
	}
	
	.tabContent .chart-mask {
		overflow-x: scroll;
		width: 100%;
		height: 183px;
		position: relative;
	}
	
	.tabContent .chart-mask .chart {
		height: 176px;
	}
	
	.tabContent .chart-mask .chart canvas {
		bottom: 0;
	}
	
	.tabContent .chart-mask .chart>div {
		width: 100%;
		overflow: scroll !important;
	}
	
	.tabContent .chart-mask .text {
		font-size: 10px;
		position: absolute;
		top: 0;
		left: 10px;
	}
	
	.tabContent .chart-mask.month .chart {
		width: 1200px;
	}
</style>