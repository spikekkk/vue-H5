<template>
	<tab-bar></tab-bar>
  <router-view/>
</template>

<script>
	import tabBar from "./common/tab-bar"
	export default {
		name: "home",
		components: {
			tabBar
		}
	}
</script>

<style scoped>

</style>
