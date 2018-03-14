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
					path: "/home/index"
				}, {
					text: "预约",
					icon: "icon-yuyue",
					className: "yuyue",
					path: "/home/yuyue"
				}, {
					text: "个人中心",
					icon: "icon-me",
					className: "me",
					path: "/home/me"
				}, {
					text: "设备管理",
					icon: "icon-shebei",
					className: "shebei",
					path: "/home/equipment"
				}]
			}
		}
	}
</script>

<style scoped>

</style>
