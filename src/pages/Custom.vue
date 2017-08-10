<template>
	<div>
		<Head :val="val"></Head>
		<Footer></Footer>
	</div>
</template>

<script>
	const Head = r => require.ensure([], ()=>r(require('@/components/Head.vue')), 'Head')
	const Footer= r => require.ensure([], ()=>r(require('@/components/Footer.vue')), 'Footer')
	
	export default{
		data(){
			return{
				val:"高级定制"
			}
		},
		components:{
			Head,
			Footer
		}
	}
</script>

<style>
	
</style>