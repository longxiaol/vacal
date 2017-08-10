<template>
	<div>
		<div class="container">
			<Head :val="show.name"></Head>
			<img :src="show.src1" alt="" />
			<img :src="show.src2" alt="" />
			<img :src="show.src3" alt="" />
			<router-link :to="{name:'details',params:{id:show.id}}">
				<img :src="show.src4" alt="" class="link"/>
			</router-link>
			<img :src="show.src5" alt="" />
			<img :src="show.src6" alt="" />
			<img :src="show.src7" alt="" />
			<img :src="show.src8" alt="" />
			<img :src="show.src9" alt="" />
			<img :src="show.src10" alt="" />
			<img :src="show.src11" alt="" />
			<img :src="show.src12" alt="" />
			<img :src="show.src13" alt="" />
			<img :src="show.src14" alt="" />
			<img :src="show.src15" alt="" />		
		</div>
	</div>
</template>

<script>
	const Head = r => require.ensure([], ()=>r(require('@/components/Head.vue')), 'Head')
	
	export default{
		data(){
			return{
				show:{},
				id:0
			}
		},
		props:[],
		components:{
			Head
		},
		created(){
			var _this=this;
			console.log(this.$route.params.id);
			if(this.$route.params.id) this.id=this.$route.params.id;
			$.get("/vacal",function(data){
				_this.show=data.goodshow[_this.id-1];
				console.log(_this.show)
			})		
		},
		mounted(){
			console.log(this.id);
			console.log(this.show);
		},
		beforeDestroy(){
			console.log(this.show);
		}
	}
</script>

<style scoped>
	.container{
		/*margin-top:0.48rem;*/
	}
	img{
		float: left;
	}
	.container img:nth-of-type(1) {
		width:3.75rem;
		height:1.81rem;
	}
	.container img:nth-of-type(2) {
		width:3.75rem;
		height:3.82rem;
	}
	.container img:nth-of-type(3) {
		width:3.75rem;
		height:1.91rem;
	}
	.container img:nth-of-type(4) {
		width:3.75rem;
		height:2.36rem;
	}
	.container .link{
		width:3.75rem;
		height:4.30rem;
	}
	.container img:nth-of-type(5) {
		width:3.75rem;
		height:2.26rem;
	}
	.container img:nth-of-type(6) {
		width:3.75rem;
		height:3.96rem;
	}
	.container img:nth-of-type(7) {
		width:3.75rem;
		height:2.34rem;
	}
	.container img:nth-of-type(8) {
		width:3.75rem;
		height:5.08rem;
	}
	.container img:nth-of-type(9) {
		width:3.75rem;
		height:3.07rem;
	}
	.container img:nth-of-type(10) {
		width:3.75rem;
		height:3.93rem;
	}
	.container img:nth-of-type(11) {
		width:3.75rem;
		height:4.50rem;
	}
	.container img:nth-of-type(12) {
		width:3.75rem;
		height:3.75rem;
	}
	.container img:nth-of-type(13) {
		width:3.75rem;
		height:2.88rem;
	}
	.container img:nth-of-type(14) {
		width:3.75rem;
		height:2.63rem;
	}
</style>