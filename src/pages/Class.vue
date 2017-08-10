<template>
	<div>
		<Head :val="val"></Head>
		<div class="classname">
			<ul>
				<li :class="{currclass:curnum==1}" @click='curnum=1'>推荐</li>
				<li :class="{currclass:curnum==2}" @click='curnum=2'>男装</li>
				<li :class="{currclass:curnum==3}" @click='curnum=3'>女装</li>
				<li :class="{currclass:curnum==4}" @click='curnum=4'>男鞋</li>
				<li :class="{currclass:curnum==5}" @click='curnum=5'>女鞋</li>
				<li :class="{currclass:curnum==6}" @click='curnum=6'>袜品</li>
				<li :class="{currclass:curnum==7}" @click='curnum=7'>家居</li>
				<li :class="{currclass:curnum==8}" @click='curnum=8'>童装</li>
				<li :class="{currclass:curnum==9}" @click='curnum=9'>内衣</li>										
			</ul>
		</div>
		<div class="classbox">
			<Classlist :lists="lists" v-if="curnum==1"></Classlist>
			<Classlist :lists="lists.slice(2,8)" v-if="curnum==2"></Classlist>
			<Classlist :lists="lists.slice(4,7)" v-if="curnum==3"></Classlist>
			<Classlist :lists="lists.slice(3,10)" v-if="curnum==4"></Classlist>
			<Classlist :lists="lists.slice(5,9)" v-if="curnum==5"></Classlist>
			<Classlist :lists="lists.slice(2,5)" v-if="curnum==6"></Classlist>
			<Classlist :lists="lists.slice(3,6)" v-if="curnum==7"></Classlist>
			<Classlist :lists="lists.slice(2,4)" v-if="curnum==8"></Classlist>
			<Classlist :lists="lists.slice(3,9)" v-if="curnum==9"></Classlist>						
		</div>
		
		<Footer></Footer>
	</div>
</template>

<script>
	const Head = r => require.ensure([], ()=>r(require('@/components/Head.vue')), 'Head')
	const Footer= r => require.ensure([], ()=>r(require('@/components/Footer.vue')), 'Footer')
	const Classlist= r => require.ensure([], ()=>r(require('@/components/Classlist.vue')), 'Classlist')
	
	
	export default{
		data(){
			return{
				val:"分类",
				curnum:1,
				lists:[]
			}
		},
		components:{
			Head,
			Footer,
			Classlist
		},
		created(){
			var _this=this;
			$.get("/vacal",function(data){
				_this.lists=data.recommend;
			})
		}
	}
</script>

<style scoped>
	.currclass{
		background: #fff;
	}
	.classname {
		/*margin-top:0.48rem;*/
		float: left;
		
	}
	.classname ul{
		height:6rem;
		background: #e5e5e5;
	}
	.classname li{
		width:0.94rem;
		height:0.37rem;
		line-height: 0.37rem;
		font-size: 0.14rem;
		text-align: center;
		border-bottom: 1px solid #fff;
	}
	.classbox{
		/*margin-top: 0.48rem;*/
	}
</style>