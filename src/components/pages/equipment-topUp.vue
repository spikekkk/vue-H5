<template>
	<div>
		<nav class="navBar">
			<p class="navBar-tit icon2">水量充值</p>
			<a href="#" class="back" onclick="javascript:history.back(-1)"></a>
		</nav>

		<!-- content -->
		<section id="topUp">
			<div class="inner">
				<div class="residue">
					<p class="residueName">剩余水量</p>
					<p class="residueNum">745L</p>
				</div>
				<div class="tabs">
					<a href="javascript:;" class="tab js-tab cur">
						<p class="type1">水量充值</p>
						<p class="desc">（每月0.01元）</p>
					</a>
					<a href="javascript:;" class="tab js-tab">
						<p class="type2">包月充值</p>
						<p class="desc">（每天0.01元）</p>
					</a>
				</div>
				<div class="tabContent">
					<ul id="typeList">
						<li>
							<a href="javascript:;" class="js-tabContent cur">
								<p class="type">2元=1L水</p>
								<p class="desc">（充2元送25水费）</p>
							</a>
						</li>
						<li>
							<a href="javascript:;" class="js-tabContent">
								<p class="type">1元=10L水</p>
								<p class="desc">（充1元送100水费）</p>
							</a>
						</li>
					</ul>
				</div>

				<div class="price">
					<p>实付总金额：¥<span class="priceNum">3.00</span></p>
					<a href="/home/equipment-pay" class="pay">支付</a>
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

<style>
	#topUp {
		padding-top: 44px;
		padding-bottom: 59px;
		max-width: 670px;
		margin: 0 auto;
	}
	
	.residue {
		width: 10rem;
		height: 4rem;
		overflow: hidden;
		margin-bottom: 10px;
		background: url(../../assets/images/10.jpg) no-repeat center center;
		background-size: cover;
		color: #0076ff;
	}
	
	.residue .residueName {
		font-size: 24px;
		font-weight: 300;
		margin-top: 38px;
		margin-left: 28px;
		line-height: 34px;
	}
	
	.residue .residueNum {
		font-size: 33px;
		font-weight: 400;
		margin-left: 28px;
		line-height: 37px;
	}
	
	.tabs {
		height: 49px;
		display: flex;
		justify-content: space-between;
		text-align: center;
		font-size: 13px;
		box-shadow: 0 6px 9px rgba(186, 202, 210, 0.2);
		border-radius: 5px;
		overflow: hidden;
		margin-left: 10px;
		margin-right: 10px;
		margin-bottom: 10px;
	}
	
	.tabs .desc {
		color: #0076ff;
	}
	
	.tabs .tab {
		height: 100%;
		flex: 1;
		line-height: 18px;
		padding-top: 6px;
		color: #000;
		box-sizing: border-box;
	}
	
	.tabs .tab.cur {
		background: #0076ff;
		color: #ffffff;
	}
	
	.tabs .tab.cur .desc {
		color: #ffffff;
	}
	
	.tabContent {
		padding: 0 10px;
	}
	
	.tabContent li {
		height: 63px;
		width: 100%;
		text-align: center;
		line-height: 20px;
		font-size: 13px;
	}
	
	.tabContent li a {
		color: #000;
		display: block;
		height: 100%;
		padding-top: 10px;
		box-sizing: border-box;
	}
	
	.tabContent a.cur {
		border: 1px solid #1f88fc;
		border-radius: 5px;
	}
	
	.tabContent a.cur .desc {
		color: #0076ff;
	}
	
	.price {
		background: #daeaf9;
		height: 49px;
		line-height: 49px;
		padding-left: 15px;
		box-sizing: border-box;
		font-size: 18px;
		font-weight: 600;
		position: fixed;
		left: 0;
		bottom: 49px;
		width: 100%;
	}
	
	.price .pay {
		display: block;
		width: 99px;
		text-align: center;
		background: #f83600;
		color: #ffffff;
		font-size: 18px;
		font-weight: normal;
		position: absolute;
		right: 0;
		top: 0;
	}
</style>