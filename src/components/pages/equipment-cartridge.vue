<template>
	<div>
		<nav class="navBar">
			<p class="navBar-tit icon6">滤芯使用</p>
			<a href="#" class="back" onclick="javascript:history.back(-1)"></a>
		</nav>

		<!-- content -->
		<section id="cartridge" class="cartridge">
			<div class="inner clear">
				<div class="circleMask">
					<div id="circle1" class="circle1">
						<div class="centerText">
							<strong></strong>
							<p class="tit">PP棉滤芯</p>
						</div>
					</div>
					<!--<canvas id="circle1" width="186" height="186"></canvas>-->
				</div>
				<div class="bottomCircle">
					<div id="circle2" class="circle2">
						<div class="centerText">
							<strong></strong>
							<p class="tit">纳滤滤芯</p>
						</div>
					</div>
					<div id="circle3" class="circle3">
						<div class="centerText">
							<strong></strong>
							<p class="tit">超滤</p>
						</div>
					</div>
				</div>

				<p class="cartridgeTip">当前滤芯安全，请放心使用</p>
				<p class="cartridgeTip">如有异色异体异味，
					<a href="#">点击此处</a>联系服务商</p>
			</div>
		</section>
	</div>
</template>

<script>
	import "@/html/lib/jquery.min.js";
	import "@/html/lib/circle-progress.js"
	export default {
		name: "",
		data() {
			return {

			}
		},
		mounted() {
			this.test()
		},
		methods: {
			test() {
				var value1 = '0.83';
				var value2 = '0.9';
				var value3 = '0.95';

				// 初始化三个图表
				var circle1Options = {
					value: value1,
					size: 186,
					fill: {
						gradient: ["#0887ff", "#31e1fb"],
						gradientAngle: -1.5
					},
					animation: {
						duration: 1000 * value1
					},
					startAngle: -1.55,
					lineCap: 'round',
					emptyFill: '#fff'
				};
				var circle2Options = {
					value: value2,
					size: 115,
					fill: {
						gradient: ["#0887ff", "#31e1fb"],
						gradientAngle: -1.55
					},
					animation: {
						duration: 1000 * value2
					},
					lineCap: 'round',
					startAngle: -1.55,
					emptyFill: '#fff'
				};
				var circle3Options = {
					value: value3,
					size: 115,
					fill: {
						gradient: ["#0887ff", "#31e1fb"],
						gradientAngle: -1.55
					},
					animation: {
						duration: 1000 * value3
					},
					lineCap: 'round',
					startAngle: -1.55,
					emptyFill: '#fff'
				};

				$('#circle1').circleProgress(circle1Options).on('circle-animation-progress', function(event, progress, stepValue) {
					$(this).find('strong').html(parseInt(100 * stepValue) + '<i>%</i>');
				});
				$('#circle2').circleProgress(circle2Options).on('circle-animation-progress', function(event, progress, stepValue) {
					$(this).find('strong').html(parseInt(100 * stepValue) + '<i>%</i>');
				});
				$('#circle3').circleProgress(circle3Options).on('circle-animation-progress', function(event, progress, stepValue) {
					$(this).find('strong').html(parseInt(100 * stepValue) + '<i>%</i>');
				});
			}
		}
	}
</script>

<style scoped>
	#cartridge {
		max-width: 670px;
		height: 100%;
		margin: 0 auto;
		padding-top: 44px;
		box-sizing: border-box;
		display: flex;
	}
	
	.inner {
		flex: 1;
		background: url(../../assets/images/12.png) no-repeat fixed;
		background-size: cover;
		box-sizing: border-box;
		color: #ffffff;
		padding: 10px;
	}
	
	.cartridgeTip {
		font-size: 15px;
	}
	
	.cartridgeTip a {
		display: inline-block;
		line-height: 25px;
		border-bottom: 1px solid #fff;
		color: #ffffff;
	}
	
	.cartridgeTip::before {
		content: '';
		display: inline-block;
		width: 15px;
		height: 15px;
		background: url(../../assets/images/icon-cartridge-circle.png) no-repeat center center;
		background-size: cover;
		margin-right: 10px;
		position: relative;
		top: 1px;
		box-shadow: 0 0 15px rgba(0, 118, 255, 0.6);
	}
	
	.circleMask {
		width: 229px;
		height: 229px;
		margin-bottom: 5px;
		box-sizing: border-box;
		border-radius: 50%;
		border: 1px solid rgba(110, 181, 221, 0.3);
		position: relative;
		left: 50%;
		margin-left: -114px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.circleMask .circle1 {
		position: relative;
	}
	
	.centerText {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		text-align: center;
		padding-top: 60px;
	}
	
	.centerText strong {
		font-weight: 400;
		font-size: 40px;
	}
	
	.centerText strong i {
		font-style: normal;
	}
	
	.bottomCircle {
		margin-bottom: 40px;
		display: inline-block;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
	}
	
	.bottomCircle .centerText {
		padding-top: 32px;
	}
	
	.bottomCircle .centerText strong {
		font-size: 30px;
	}
	
	.circle2 {
		position: relative;
		width: 115px;
		height: 115px;
		display: inline-block;
		margin-right: 1rem;
	}
	
	.circle3 {
		width: 115px;
		height: 115px;
		position: relative;
		display: inline-block;
	}
</style>