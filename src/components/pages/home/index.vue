<template>
	<section id="home">
		<a href="#" class="banner">
			<img src="@/assets/images/banner.jpg">
		</a>
		<div class="row">
			<a href="#" class="aside-small">
				<img src="@/assets/images/2.jpg">
			</a>
			<a href="#" class="aside-small">
				<img src="@/assets/images/3.jpg">
			</a>
		</div>
		<div class="row">
			<a href="#" class="aside">
				<img src="@/assets/images/6.jpg">
			</a>
		</div>
		<div class="row">
			<a href="#" class="aside-small">
				<img src="@/assets/images/4.jpg">
			</a>
			<a href="#" class="aside-small">
				<img src="@/assets/images/5.jpg">
			</a>
		</div>
	</section>
</template>

<script>
	export default {
		name: "index"
	}
</script>

<style scoped>
	#home {
		max-width: 670px;
		margin: 0 auto;
	}
	
	#home .banner {
		width: 10rem;
		height: 4rem;
		display: block;
		margin-bottom: 10px;
		overflow: hidden;
	}
	
	#home .banner img {
		width: 100%;
		height: 100%;
	}
	
	#home .row {
		width: 100%;
		padding: 0 10px;
		box-sizing: border-box;
		display: flex;
		margin-bottom: 10px;
		justify-content: space-between;
	}
	
	#home .row img {
		width: 100%;
		height: 100%;
	}
	
	#home .row a {
		display: block;
		box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
	}
	
	#home .row .aside-small {
		width: 4.6rem;
		border-radius: 4px;
		overflow: hidden;
	}
	
	#home .row .aside {
		flex: 1;
		border-radius: 4px;
		overflow: hidden;
	}
</style>