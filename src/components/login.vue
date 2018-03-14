<template>
	<div>
		<section id="login">
			<div class="logoWrap">
				<img src="../assets/images/logo.png" class="logo">
			</div>

			<div>
				<div class="formLine">
					<p>手机号</p>
					<input id="phoneNum" type="tel" placeholder="请输入手机号">
					<a href="javascript:;" id="sendCode" class="sendCode">发送验证码</a>
				</div>
				<div class="formLine">
					<p>验证码</p>
					<input id="codeNum" type="text" maxlength="6" pattern="[0-9]*" placeholder="请输入验证码">
				</div>
				<input id="btn-login" class="btn btn-login" type="submit" value="登录" @click="login">
			</div>
		</section>

		<!-- 错误提示 -->
		<section id="errTip" class="errTip">
			<div class="inner">
				<p id="errText" class="errText">手机号不正确！</p>
			</div>
		</section>
	</div>

</template>

<script>
	export default {
		name: "login",
		methods:{
			login(){
				this.$router.push("/home")
			}
		}
	}
</script>

<style scoped>
	#login {
		width: 100%;
		height: 100%;
		background: url("../assets/images/1.jpg") no-repeat center center;
		background-size: cover;
		position: relative;
	}
	
	#login .logoWrap {
		text-align: center;
		padding-top: 70px;
		margin-bottom: 42px;
	}
	
	#login .logoWrap img {
		width: 119px;
	}
	
	#login .formLine {
		padding: 0 30px;
		position: relative;
		margin-bottom: 10px;
	}
	
	#login .formLine p {
		line-height: 25px;
		font-size: 12px;
		color: #afb7bb;
		letter-spacing: 2px;
	}
	
	#login .formLine input {
		color: #333333;
		background: transparent;
		caret-color: #0076ff;
		border: none;
		width: 100%;
		line-height: 34px;
		border-bottom: 1px solid #e0e9f3;
	}
	
	#login .formLine .sendCode {
		position: absolute;
		right: 30px;
		bottom: 8px;
		display: block;
		width: 92px;
		height: 25px;
		color: #ffffff;
		line-height: 25px;
		text-align: center;
		font-size: 13px;
		background: -webkit-linear-gradient(left, #10a2ff, #107fff);
		/* Safari 5.1 - 6.0 */
		background: linear-gradient(to right, #10a2ff, #107fff);
		/* 标准的语法 */
	}
</style>