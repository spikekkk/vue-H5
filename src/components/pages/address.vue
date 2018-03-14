<template>
	<div>

		<!-- nav bar -->
		<nav class="navBar">
			<p class="navBar-tit icon1">安装配送地址</p>
			<a href="#" class="back" onclick="javascript:history.back(-1)"></a>
		</nav>

		<!-- content -->
		<section id="address">
			<div class="inner">
				<section class="addLine cur js-addLine">
					<div class="tit">
						<span class="name">cl1ff</span>
						<span class="tell">14725836915</span>
					</div>
					<p class="addressDetail">北京市朝阳区建外SOHO 16号楼1908</p>
					<div class="cut-line"></div>
					<div class="ctrl">
						<a href="/home/address-edit" class="edit">编辑</a>
						<a href="javascript:;" class="del js-del">删除</a>
					</div>
				</section>
				<section class="addLine js-addLine">
					<div class="tit">
						<span class="name">cl1ff</span>
						<span class="tell">14725836915</span>
					</div>
					<p class="addressDetail">北京市朝阳区建外SOHO 16号楼1800</p>
					<div class="cut-line"></div>
					<div class="ctrl">
						<a href="/home/address-edit" class="edit">编辑</a>
						<a href="javascript:;" class="del js-del">删除</a>
					</div>
				</section>
				<section class="addLine js-addLine">
					<div class="tit">
						<span class="name">cl1ff</span>
						<span class="tell">14725836915</span>
					</div>
					<p class="addressDetail">北京市朝阳区建外SOHO 16号楼1900</p>
					<div class="cut-line"></div>
					<div class="ctrl">
						<a href="/home/address-edit" class="edit">编辑</a>
						<a href="javascript:;" class="del js-del">删除</a>
					</div>
				</section>
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
	#address {
		padding-top: 44px;
		padding-bottom: 59px;
		max-width: 670px;
		margin: 0 auto;
	}
	
	.inner {
		margin: 10px;
		background: #eeeeee;
		background-origin: content-box;
	}
	
	.addLine {
		padding: 10px;
		background: #ffffff;
		margin-bottom: 5px;
		color: #141516;
	}
	
	.addLine .tit {
		line-height: 20px;
	}
	
	.addLine .tit .name {
		font-size: 16px;
	}
	
	.addLine .tit .tell {
		font-size: 13px;
	}
	
	.addLine .addressDetail {
		font-size: 14px;
		line-height: 22px;
		margin-bottom: 2px;
	}
	
	.addLine .cut-line {
		border-bottom: 1px dashed #d9ddde;
	}
	
	.addLine .ctrl {
		line-height: 40px;
		font-size: 15px;
		display: flex;
		justify-content: flex-end;
	}
	
	.addLine .ctrl a {
		display: block;
		color: #141516;
	}
	
	.addLine .ctrl .edit {
		margin-right: 18px;
	}
	
	.addLine .ctrl .edit::before {
		content: '';
		display: inline-block;
		width: 18px;
		height: 18px;
		background-image: url(../../assets/images/icon-addres-edit.png);
		background-size: 18px 18px;
		margin-right: 5px;
		position: relative;
		top: 3px;
	}
	
	.addLine .ctrl .del::before {
		content: '';
		display: inline-block;
		width: 18px;
		height: 18px;
		background-image: url(../../assets/images/icon-addres-del.png);
		background-size: 18px 18px;
		margin-right: 5px;
		position: relative;
		top: 3px;
	}
	
	.addLine.cur {
		background: #2089ff;
		color: #ffffff;
		border-radius: 5px;
	}
	
	.addLine.cur .cut-line {
		border-bottom: 1px dashed #8ac0ff;
	}
	
	.addLine.cur .ctrl a {
		color: #fff;
	}
	
	.addLine.cur .ctrl .edit::before {
		background-image: url(../../assets/images/icon-addres-edit-pre.png);
	}
	
	.addLine.cur .ctrl .del::before {
		background-image: url(../../assets/images/icon-addres-del-pre.png);
	}
</style>