<template>
	<div>
		<nav class="navBar">
			<p class="navBar-tit icon1">预约订单</p>
			<a href="#" class="back" onclick="javascript:history.back(-1)"></a>
		</nav>

		<!-- content -->
		<section id="order">
			<div class="inner">
				<div id="tabs" class="tabs">
					<a href="#" class="tab cur">全部</a>
					<a href="#" class="tab">已处理</a>
					<a href="#" class="tab">处理中</a>
					<a href="#" class="tab">待处理</a>
					<a href="#" class="tab">已过期</a>
				</div>
				<div class="tabContent">
					<section class="orderLine">
						<div class="tit">
							<p class="name">蛙发净水</p>
							<span class="status">待处理</span>
						</div>
						<div class="orderDetail">
							<p class="num">订单编号：JHK4354683323233</p>
							<p class="detail">订单详情：预约订单</p>
							<p class="address">订单地址：北京市朝阳区建外SOHO</p>
						</div>
						<div class="pay">
							<div class="payment-amount">
								<span class="payment">支付金额：</span>
								<span class="amount">¥1</span>
							</div>
							<a href="#" class="btn btn-pay">去支付</a>
						</div>
					</section>

					<section class="orderLine">
						<div class="tit">
							<p class="name">蛙发净水</p>
							<span class="status">已过期</span>
						</div>
						<div class="orderDetail">
							<p class="num">订单编号：JHK4354683323233</p>
							<p class="detail">订单详情：预约订单</p>
							<p class="address">订单地址：北京市朝阳区建外SOHO</p>
						</div>
						<div class="pay">
							<div class="payment-amount">
								<span class="payment">支付金额：</span>
								<span class="amount">¥2</span>
							</div>
						</div>
					</section>
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
	#order {
		padding-top: 44px;
		padding-bottom: 59px;
		max-width: 670px;
		margin: 0 auto;
	}
	
	.inner {
		padding: 10px;
	}
	
	.tabs {
		display: flex;
		justify-content: space-around;
		width: 100%;
		height: 35px;
		border-radius: 5px;
		box-shadow: 0 6px 9px rgba(186, 202, 210, 0.2);
		margin-bottom: 10px;
	}
	
	.tabs a {
		color: #000;
		display: block;
		text-align: center;
		line-height: 35px;
	}
	
	.tabs .tab.cur {
		border-bottom: 1px solid #0076ff;
	}
	
	.tabContent {
		background: #eeeeee;
	}
	
	.orderLine {
		background: #ffffff;
		margin-bottom: 5px;
	}
	
	.orderLine .tit {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #eeeeee;
	}
	
	.orderLine .tit .name {
		line-height: 35px;
		font-size: 15px;
		color: #141516;
	}
	
	.orderLine .tit .status {
		font-size: 10px;
		color: #107fff;
		position: relative;
		margin-top: 8px;
	}
	
	.orderLine .orderDetail {
		padding: 10px 0;
		border-bottom: 1px solid #eeeeee;
	}
	
	.orderLine .orderDetail p {
		line-height: 22px;
		font-size: 13px;
		color: #555;
	}
	
	.orderLine .pay {
		display: flex;
		justify-content: space-between;
		padding-top: 5px;
		padding-bottom: 10px;
	}
	
	.orderLine .pay .btn-pay {
		width: 50px;
		height: 22px;
		font-size: 11px;
		text-align: center;
		line-height: 22px;
		margin-top: 8px;
		margin-left: 0;
	}
	
	.orderLine .pay .payment {
		font-size: 15px;
		color: #141516;
	}
	
	.orderLine .pay .amount {
		font-size: 24px;
		color: #107fff;
	}
</style>