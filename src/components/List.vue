<template>
	<div class="list">		
		<router-link :to="{name:'goodshow',params:{id:item.id}}" v-for="item in lists">
			<img :src=item.src alt="" />
			
		</router-link>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:['lists']
	}
</script>
	
<style scoped>
	.list{
		width:3.75rem;
	}
	.list a{
		width:1.86rem;
		overflow: hidden;
		height:3.39rem;
		
	}
	.list img{
		width:1.86rem;
		height:3.39rem;
		border-top:1px solid #f2f2f2;
		border-left:1px solid #f2f2f2;
		
		
	}
</style>