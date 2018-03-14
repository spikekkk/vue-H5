<template>
	<section id="me">
		<div class="info">
			<div class="inner">
				<div class="headImg">
					<img src="@/assets/images/headImg.jpg">
				</div>
				<div class="equipment">
					<span class="name">cl1ff</span>
					<span class="equipmentNum">（1个设备）</span>
				</div>
			</div>
		</div>
		<div class="money">
			<div class="inner">
				<!-- 余额 -->
				<div class="balance">
					<p class="num mainColor">0</p>
					<p class="name">账户余额</p>
				</div>

				<div class="cut-line">
					<span class="block"></span>
					<span class="block"></span>
					<span class="block"></span>
					<span class="block"></span>
					<span class="block"></span>
					<span class="block"></span>
					<span class="block"></span>
					<span class="block"></span>
					<span class="block"></span>
				</div>
				<!-- 押金 -->
				<div class="deposit">
					<p class="num mainColor">0</p>
					<p class="name">押金</p>
				</div>
			</div>
		</div>
		<section class="order">
			<div class="inner">
				<a href="order.html" class="row">
					<p>预约订单</p>
					<span class="icon icon1"></span>
				</a>
				<a href="order.html" class="row">
					<p>试用订单</p>
					<span class="icon icon2"></span>
				</a>
				<a href="address.html" class="row">
					<p>收货地址</p>
					<span class="icon icon3"></span>
				</a>
			</div>
		</section>
		<a id="logoOut" href="javascript:;" class="btn btn-quit">退出登录</a>
	</section>
</template>

<script>
	export default {
		name: ""
	}
</script>

<style scoped>
	#me {
		max-width: 670px;
		margin: 0 auto;
	}

	.info {
		margin-top: 10px;
		margin-bottom: 12px;
		padding: 0 10px;
		display: flex;
		color: #ffffff;
	}

	.info .inner {
		flex: 1;
		height: 100px;
		border-radius: 5px;
		background: url(../../assets/images/7.jpg) no-repeat center center;
		background-size: cover;
		padding: 25px 19px;
		box-sizing: border-box;
		display: flex;
		box-shadow: 0 5px 13px rgba(49, 127, 203, 0.3);
	}

	.info .inner .headImg {
		width: 50px;
		height: 50px;
		border-radius: 25px;
		overflow: hidden;
		margin-right: 17px;
	}

	.info .inner .headImg img {
		width: 100%;
		height: 100%;
	}

	.info .inner .equipment {
		line-height: 50px;
	}

	.info .inner .equipment .name {
		font-size: 16px;
	}

	.info .inner .equipment .equipmentNum {
		font-size: 13px;
	}

	.money {
		padding: 0 10px;
		height: 50px;
		display: flex;
		margin-bottom: 18px;
	}

	.money .inner {
		flex: 1;
		height: 100%;
		display: flex;
		justify-content: space-between;
		background: #ffffff;
		border-radius: 5px;
		color: #131314;
		box-shadow: 0 6px 9px rgba(186, 202, 210, 0.2);
	}

	.money .inner .balance {
		flex: 1;
		text-align: center;
		margin-top: 7px;
	}

	.money .inner .cut-line {
		width: 1px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.money .inner .cut-line .block {
		width: 1px;
		height: 1px;
		background: #b3c1d7;
	}

	.money .inner .deposit {
		margin-top: 7px;
		flex: 1;
		text-align: center;
	}

	.order {
		padding: 0 42px;
		margin-bottom: 30px;
	}

	.order .inner {
		padding: 0 27px;
		box-shadow: 0 23px 50px rgba(0, 0, 0, 0.1);
	}

	.order .row {
		line-height: 56px;
		font-size: 16px;
		color: #000;
		border-bottom: 1px solid #eeeeee;
		display: flex;
		justify-content: space-between;
	}

	.order .row .icon {
		width: 16px;
		height: 16px;
		background-size: 16px 16px;
		position: relative;
		top: 20px;
	}

	.order .row .icon1 {
		background-image: url(../../assets/images/icon-me-icon1.png);
	}

	.order .row .icon2 {
		background-image: url(../../assets/images/icon-me-icon2.png);
	}

	.order .row .icon3 {
		background-image: url(../../assets/images/icon-me-icon3.png);
	}

	.btn-quit {
		display: block;
		text-align: center;
		line-height: 39px;
	}
</style>
