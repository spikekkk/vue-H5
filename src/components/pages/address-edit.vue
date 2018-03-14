<template>
	<section id="address-edit">
		<div class="inner">
			<form action="">
				<div class="formLine">
					<span class="label">收货人</span>
					<input id="name" type="text" value="cl1ff">
				</div>
				<div class="formLine">
					<span class="label">电话</span>
					<input id="tell" type="tel" value="14725836915">
				</div>
				<div class="formLine">
					<span class="label">所在地区</span>
					<a href="javascript:;" id="area" class="myInput">选择城市</a>
				</div>
				<div class="formLine">
					<span class="label textareaLabel">详细地址</span>
					<textarea name="" id="detailAddress">北京市朝阳区建外SOHO 16号楼1908 拷贝</textarea>
				</div>
				<input id="btn-save" type="submit" class="btn btn-save" value="保存">
			</form>
		</div>
	</section>
</template>

<script>
	export default {
		name: ""
	}
</script>

<style scoped>
	#address-edit {
		padding-bottom: 59px;
		max-width: 670px;
		margin: 0 auto;
	}
	
	.inner {
		padding: 10px;
	}
	
	.formLine {
		border-bottom: 1px solid #eeeeee;
		font-size: 13px;
		line-height: 32px;
		position: relative;
		display: flex;
	}
	
	.formLine .label {
		color: #141516;
		width: 70px;
		display: inline-block;
	}
	
	.formLine input,
	.formLine textarea {
		caret-color: #0076ff;
	}
	
	.formLine input {
		flex: 1;
		border: none;
		color: #555555;
		height: 32px;
	}
	
	.formLine textarea {
		outline: none;
		border: none;
		resize: none;
		height: 64px;
		width: 100%;
		margin-left: 70px;
		line-height: 32px;
		color: #555555;
		font-size: 13px;
	}
	
	.formLine .textareaLabel {
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.myInput {
		color: #555555;
		flex: 1;
	}
	
	.picker-panel {
		background: #d5d8df !important;
	}
	
	.picker-choose {
		border-bottom: 1px solid #ddd;
		box-sizing: border-box;
		background: #ffffff;
	}
	
	.picker-choose .cancel {
		color: #0575f2 !important;
		font-size: 16px;
	}
	
	.picker-choose .confirm {
		color: #0575f2 !important;
		font-size: 16px;
	}
	
	.mask-top,
	.mask-bottom {
		opacity: 0.5;
	}
	
	.mask-top {
		border-bottom: 1px solid #b3b6bd;
	}
	
	.mask-bottom {
		border-top: 1px solid #b3b6bd;
	}
	
	.wheel {
		font-size: 18px !important;
	}
</style>