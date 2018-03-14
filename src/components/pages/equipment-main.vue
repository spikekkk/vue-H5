<template>
	<div>
		<nav class="navBar">
			<p class="navBar-tit icon3">我家水质</p>
			<a href="#" class="back" onclick="javascript:history.back(-1)"></a>
		</nav>

		<!-- content -->
		<section id="equMain" class="cartridge">
			<div class="inner">
				<div class="info info1">
					<section class="left">
						<div class="name">
							<span class="icon1"></span>
							<span class="tit">自来水水质</span><span class="smallText">（tds）</span>
						</div>
						<p class="num">0</p>
						<p class="desc">目前自来水状况</p>
					</section>
					<div class="cut-line"></div>
					<section class="right">
						<div class="name">
							<span class="icon2"></span>
							<span class="tit">净水水质</span><span class="smallText">（tds）</span>
						</div>
						<p class="num">36</p>
						<p class="desc">符合直饮水标准</p>
					</section>
				</div>

				<p class="tip">tds &lt; 1000符合市政府自来水标准</p>

				<div class="info info2">
					<section class="left">
						<div class="name">
							<span class="icon3"></span>
							<span class="tit">今日使用净水量</span>
						</div>
						<p class="num">0L</p>
					</section>

					<div class="cut-line"></div>

					<section class="right">
						<div class="name">
							<span class="icon4"></span>
							<span class="tit">到期时间</span>
						</div>
						<p class="num" style="font-size: 15px">已到期</p>
					</section>
				</div>

				<a class="aside1" href="equipment-cartridge.html">滤芯使用</a>
				<div class="aside2">
					<a class="asideL" href="equipment-waterConsumption.html">用水量</a>
					<a class="asideR" href="equipment-pay.html">用水充值</a>
				</div>

			</div>
		</section>

	</div>
</template>

<script>
	export default {
		name: ""
	}
</script>

<style scoped>
	#equMain {
		padding-top: 44px;
	}
	
	.inner {
		padding: 10px;
	}
	
	.info {
		height: 84px;
		display: flex;
		color: #121214;
		overflow: hidden;
		border-radius: 5px;
	}
	
	.info .left,
	.info .right {
		flex: 1;
		text-align: center;
		padding-top: 10px;
		box-sizing: border-box;
	}
	
	.info .cut-line {
		width: 1px;
		border-right: 1px dashed #91c4fe;
	}
	
	.info .name {
		margin-bottom: 5px;
	}
	
	.info .name .tit {
		font-size: 17px;
		font-weight: 600;
	}
	
	.info .name .smallText {
		font-size: 9px;
	}
	
	.info .num {
		color: #0076ff;
		font-size: 20px;
	}
	
	.info .desc {
		font-size: 10px;
	}
	
	.info .icon1 {
		display: inline-block;
		width: 20px;
		height: 20px;
		background: url(../../assets/images/icon-myWater-1.png) no-repeat center center;
		background-size: cover;
		position: relative;
		top: 4px;
	}
	
	.info .icon2 {
		display: inline-block;
		width: 20px;
		height: 20px;
		background: url(../../assets/images/icon-myWater-2.png) no-repeat center center;
		background-size: cover;
		position: relative;
		top: 4px;
	}
	
	.info .icon3 {
		display: inline-block;
		width: 20px;
		height: 20px;
		background: url(../../assets/images/icon-myWater-3.png) no-repeat center center;
		background-size: cover;
		position: relative;
		top: 4px;
	}
	
	.info .icon4 {
		display: inline-block;
		width: 20px;
		height: 20px;
		background: url(../../assets/images/icon-myWater-4.png) no-repeat center center;
		background-size: cover;
		position: relative;
		top: 4px;
	}
	
	.info1 {
		background: url(../../assets/images/13.jpg) no-repeat center center;
		background-size: cover;
	}
	
	.info2 {
		background: url(../../assets/images/14.jpg) no-repeat center center;
		background-size: cover;
		padding-top: 5px;
		box-sizing: border-box;
	}
	
	.tip {
		margin: 10px 0;
		text-align: center;
		color: #0076ff;
	}
	
	a {
		color: #ffffff;
	}
	
	.aside1 {
		height: 81px;
		border-radius: 5px;
		overflow: hidden;
		display: flex;
		background: url(../../assets/images/15.jpg) no-repeat center center;
		background-size: cover;
		margin-top: 10px;
		box-sizing: border-box;
		position: relative;
		padding: 10px;
		font-size: 14px;
	}
	
	.aside2 {
		height: 81px;
		margin-top: 10px;
		display: flex;
		text-shadow: 0 2px 5px rgba(80, 103, 159, 0.5);
	}
	
	.aside2 .asideL {
		margin-right: 10px;
		flex: 1;
		border-radius: 5px;
		overflow: hidden;
		background: url(../../assets/images/16.jpg) no-repeat left center;
		background-size: cover;
		padding: 10px;
		box-sizing: border-box;
	}
	
	.aside2 .asideR {
		flex: 1;
		border-radius: 5px;
		overflow: hidden;
		background: url(../../assets/images/17.jpg) no-repeat left center;
		background-size: cover;
		padding: 10px;
		box-sizing: border-box;
	}
</style>