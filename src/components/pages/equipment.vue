<template>
	<section id="equipment">
		<div class="inner">
			<!-- -->
			<div class="myEquipment">
				<div class="litre">
					<p class="litre-num">3.99L</p>
					<p class="litre-detail">今日使用净水量，剩余998L </p>
				</div>
				<div class="ctrl">
					<a href="javascript:;" class="btn-transparency delEqt">删除设备</a>
					<a href="javascript:;" class="btn-transparency addEqt">添加设备</a>
				</div>
			</div>

			<!-- 设备数量 -->
			<div class="eqtNum">
				<div class="content">
					<p class="num">共 <span id="num">2</span> 台家中智能设备</p>
					<p class="name">泽钛造水</p>
				</div>
			</div>

			<!-- 设备列表 -->
			<ul class="eqtList">
				<li>
					<div class="container">
						<div class="eqt-info">
							<a href="equipment-main.html" class="eqt-icon"></a>
							<div class="right">
								<a href="javascript:;" onclick="showAlert()">点击修改设备名称</a>
								<p class="eqt-desc">设备在线</p>
							</div>
						</div>

						<div class="eqt-ctrl">
							<a href="equipment-topUp.html" class="btn btn-small">充值</a>
							<a href="javascript:;" class="btn btn-small">报修</a>
						</div>
					</div>
				</li>
			</ul>

			<!--ul>li{$}*50-->
		</div>
	</section>
</template>

<script>
	export default {
		name: ""
	}
</script>

<style scoped>
	#equipment {
		position: relative;
		max-width: 670px;
		margin: 0 auto;
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	.inner {
		flex: 1;
		background: url(../../assets/images/8.jpg) no-repeat fixed;
		background-size: cover;
		padding: 10px;
		box-sizing: border-box;
	}

	.myEquipment {
		color: #ffffff;
		margin-top: 10px;
		margin-bottom: 30px;
		position: relative;
		width: 100%;
		justify-content: space-between;
	}

	.myEquipment .litre {
		display: inline-block;
	}

	.myEquipment .litre .litre-num {
		font-weight: 300;
		font-size: 50px;
		line-height: 53px;
	}

	.myEquipment .litre .litre-detail {
		font-size: 13px;
		line-height: 20px;
	}

	.myEquipment .ctrl {
		margin-top: 20px;
		width: 161px;
		display: inline-block;
		position: absolute;
		top: 0;
		right: 0;
	}

	.myEquipment .ctrl .btn-transparency {
		color: #ffffff;
		margin-right: 10px;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 15px;
		padding: 6px 10px;
		font-size: 13px;
		margin-bottom: 5px;
		line-height: 27px;
	}

	.myEquipment .ctrl .addEqt {
		margin-right: 0;
	}

	.eqtNum {
		color: #0076ff;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 4rem;
		border-radius: 5px;
		background: url(../../assets/images/9.jpg) no-repeat center center;
		background-size: cover;
		margin-bottom: 10px;
	}

	.eqtNum .num {
		font-size: 24px;
		line-height: 40px;
	}

	.eqtNum .name {
		font-size: 15px;
		line-height: 30px;
	}

	.eqtList {
		background: #ffffff;
		border-radius: 5px;
		padding: 0 12px;
	}

	.eqtList li {
		height: 82px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 1px solid #eeeeee;
	}

	.eqtList li .container {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.eqtList li .eqt-info {
		display: flex;
	}

	.eqtList li .eqt-info a {
		color: #0076ff;
	}

	.eqtList li .eqt-info .eqt-icon {
		width: 36px;
		height: 40px;
		background: url(../../assets/images/icon-equipment-water.png);
		background-size: cover;
		margin-right: 8px;
	}

	.eqtList li .eqt-ctrl {
		padding-top: 10px;
		width: 110px;
	}

	.eqtList li .eqt-ctrl .btn-small {
		width: 42px;
		padding: 5px 7px;
		font-size: 11px;
		line-height: 30px;
	}

	.alert-mask {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 300;
		background: rgba(0, 0, 0, 0.4);
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.alert-mask .alert-panel {
		background: #ffffff;
		border-radius: 5px;
		width: 6rem;
		height: 150px;
		padding: 1px 0;
	}

	.alert-mask .alert-panel .tit {
		font-size: 14px;
		color: #000;
		line-height: 40px;
		margin-top: 14px;
	}

	.alert-mask .alert-panel input {
		border-radius: 5px;
		outline: none;
		border: 1px solid #afb7bb;
		width: 180px;
		height: 22px;
		padding-left: 5px;
		font-size: 14px;
		box-sizing: border-box;
	}

	.alert-mask .alert-panel .btns {
		width: 180px;
		position: relative;
		left: 50%;
		margin-left: -90px;
		display: flex;
		justify-content: space-between;
	}

	.alert-mask .alert-panel .btn-confirm {
		position: relative;
		right: -7px;
	}

	.alert-mask .alert-panel .btn-cancel,
	.alert-mask .alert-panel .btn-confirm {
		width: 82px;
		line-height: 25px;
		height: 25px;
		font-size: 11px;
		margin-left: 0;
		margin-top: 15px;
	}
</style>
