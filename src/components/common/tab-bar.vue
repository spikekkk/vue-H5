<template>
	<section class="tabBar">
		<template v-for="(item,index) in nav">
			<router-link :to="item.path" :class="item.className" :keys="index" :index="index">
				<span class="icon" :class="item.icon"></span>
        {{ item.text }}
			</router-link>
		</template>
	</section>
</template>

<script>
	export default {
		name: "tab-bar",
		data() {
			return {
				nav: [{
					text: "首页",
					icon: "icon-home",
					className: "home",
					path: "/"
				}, {
					text: "预约",
					icon: "icon-yuyue",
					className: "yuyue",
					path: "/"
				}, {
					text: "个人中心",
					icon: "icon-me",
					className: "me",
					path: "/"
				}, {
					text: "设备管理",
					icon: "icon-shebei",
					className: "shebei",
					path: "/"
				}]
			}
		}
	}
</script>

<style scoped>

</style>
