<template>
	<div>
		<nav class="navBar">
			<p class="navBar-tit icon2">水量充值</p>
			<a href="#" class="back" onclick="javascript:history.back(-1)"></a>
		</nav>

		<!-- content -->
		<section id="pay">
			<div class="inner">

				<div class="topPrice">
					<div class="bg1 moveL"></div>
					<div class="bg2 moveR"></div>
					<div class="content">
						<div class="tit">2元=1L水</div>
						<div class="price">2.00</div>
						<div class="desc">此次充值将获得附赠的25元水费</div>
					</div>
				</div>

				<section class="payType">
					<p class="payType-tit">充值类型</p>
					<ul id="payTypeList">
						<li>
							<a href="javascript:;" class="wx-pay cur">微信支付（默认）
								<span class="typeStatus"></span>
							</a>
						</li>
						<li>
							<a href="javascript:;" class="other-pay">账户余额支付
								<span class="typeStatus"></span>
							</a>
						</li>
					</ul>
				</section>

				<a id="toPay" class="btn btn-pay" href="javascript:;">去支付</a>
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
	#pay {
		padding-top: 44px;
		padding-bottom: 59px;
		max-width: 670px;
		margin: 0 auto;
	}
	
	.inner {
		padding: 10px;
	}
	
	.topPrice {
		height: 3.89rem;
		width: 100%;
		background: #0076fe;
		position: relative;
		color: #ffffff;
		border-radius: 5px;
		text-align: center;
		overflow: hidden;
	}
	
	.topPrice .bg1,
	.topPrice .bg2 {
		height: 3.8rem;
		width: 42.97rem;
		position: absolute;
		bottom: 0;
		left: 0;
		background: url(../../assets/images/11.png);
		background-size: cover;
	}
	
	.topPrice .bg2 {
		-webkit-transform: translate3d(-20rem, 0, 0);
		transform: translate3d(-20rem, 0, 0);
	}
	
	.topPrice .content {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.topPrice .tit {
		display: inline-block;
		font-size: 12px;
		padding: 8px 18px;
		border-radius: 50px;
		background: rgba(255, 255, 255, 0.2);
		margin-top: 0.33rem;
	}
	
	.topPrice .price {
		font-size: 50px;
		font-weight: 400;
		line-height: 62px;
	}
	
	.topPrice .price::before {
		content: '¥';
		color: #ffffff;
		font-size: 15px;
		position: relative;
		top: -30px;
		left: 0;
		margin-right: 2px;
	}
	
	.topPrice .desc {
		font-size: 10px;
	}
	
	@-webkit-keyframes moveBgL {
		from {
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}
		to {
			-webkit-transform: translate3d(-20rem, 0, 0);
			transform: translate3d(-20rem, 0, 0);
		}
	}
	
	@keyframes moveBgL {
		from {
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}
		to {
			-webkit-transform: translate3d(-20rem, 0, 0);
			transform: translate3d(-20rem, 0, 0);
		}
	}
	
	@-webkit-keyframes moveBgR {
		from {
			-webkit-transform: translate3d(-20rem, 0, 0);
			transform: translate3d(-20rem, 0, 0);
		}
		to {
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}
	}
	
	@keyframes moveBgR {
		from {
			-webkit-transform: translate3d(-20rem, 0, 0);
			transform: translate3d(-20rem, 0, 0);
		}
		to {
			-webkit-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}
	}
	
	.moveL {
		-webkit-animation: moveBgL 5s linear infinite alternate;
		animation: moveBgL 5s linear infinite alternate;
	}
	
	.moveR {
		-webkit-animation: moveBgR 8s linear infinite alternate;
		animation: moveBgR 8s linear infinite alternate;
	}
	
	.payType .payType-tit {
		line-height: 33px;
		color: #121214;
		border-bottom: 1px dashed #9ccaff;
		font-size: 12px;
		margin-bottom: 3px;
	}
	
	.payType li {
		border-bottom: 1px solid #e3e3e3;
	}
	
	.payType li:nth-last-of-type(1) {
		border: none;
	}
	
	.payType a {
		display: block;
		line-height: 44px;
		font-size: 15px;
		color: #121214;
		position: relative;
	}
	
	.payType a::before {
		content: '';
		display: inline-block;
		width: 24px;
		height: 24px;
		position: relative;
		top: 5px;
		margin-right: 10px;
		background-size: cover;
		background-image: url(../../assets/images/icon-pay-other.png);
	}
	
	.payType .wx-pay::before {
		background-image: url(../../assets/images/icon-pay-wx.png);
	}
	
	.payType .typeStatus {
		width: 17px;
		height: 17px;
		border: 1px solid #3090ff;
		display: inline-block;
		border-radius: 50%;
		position: absolute;
		right: 0;
		top: 13px;
		box-sizing: border-box;
	}
	
	.payType a.cur .typeStatus {
		border: 5px solid #3090ff;
		box-shadow: 0 5px 5px rgba(31, 142, 250, 0.4);
	}
	
	.btn-pay {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 1.8667rem;
		width: 100%;
		margin-left: 0;
	}
</style>