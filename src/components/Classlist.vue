<template>
	<div>
		<router-link to v-for="item in lists" class="imgbox">
			<img :src="item.url" alt="" />
			<p>{{item.proName}}</p>
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
	img{
		width:0.7rem;
		height:0.7rem;
	}
	span{
		
	}
	.imgbox{
		display: inline-block;
		width:0.93rem;
		height:1rem;
		text-decoration: none;
		color: #999;
	}
	.imgbox p{
		font-size: 0.12rem;
	}
	
</style>