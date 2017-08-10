<template>
	<div>
		<div class="tou">
			<div class="searchbox">
				<lable class="iconfont icon-fenlei"></lable>
				<input type="text" placeholder="熊本熊"/>
			</div>
			<div class="msg">...</div>
		</div>
		<div class="container">
			<div class="swiper-container">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide"><img src="../../static/img/1.jpg"/></div>
			        <div class="swiper-slide"><img src="../../static/img/2.jpg"/></div>
			    </div>
			    <div class="swiper-pagination"></div>
			</div>
			<router-link to="http://m.vancl.com/channel/index/883">
				<img class="mo" src="../../static/img/4.jpg" alt="" />
			</router-link>
			<router-link to="http://m.vancl.com/CashReCharge/index">
				<img class="moo" src="../../static/img/ad.jpg" alt="" />
			</router-link>
			<List :lists="lists"></List>
			
			<router-link to><img class="newgoods"src="http://i9.m.vancl.com/wap/2017_7_6_14_49_52_9162_640x350.jpg" alt="" /></router-link>
			<List :lists="lists"></List>
			
			<router-link to><img class="newgoods"src="http://i4.m.vancl.com/wap/2017_5_5_14_54_58_4835_640x350.jpg" alt="" /></router-link>
			<List :lists="lists"></List>
	
			<router-link to><img class="newgoods"src="http://i4.m.vancl.com/wap/2017_5_5_14_54_58_4835_640x350.jpg" alt="" /></router-link>
			<List :lists="lists"></List>
			<router-link to><img class="newgoods"src="http://i1.m.vancl.com/wap/2017_7_27_16_7_17_1275_640x350.jpg" alt="" /></router-link>
			
			<div class="more">
				<router-link to='/class'><img  src="http://i10.m.vancl.com/content/html5v3/images/see-all.jpg" alt="" /></router-link>
				<router-link to><img @click="gohead"src="http://i10.m.vancl.com/content/html5v3/images/ret-top.jpg" alt="" /></router-link>
			</div>
		<div class="aa">
			<div class="log">
				<router-link to='/login' class="login">登录</router-link>
				<router-link to='/register' class="sign">注册</router-link>
				<!--<div class="user">{{username}}|<div class="logout">退出</div></div>-->
			</div>
			<ul class="link">
				<li><a href="http://m.vancl.com/help/default/131"><img src="http://i10.m.vancl.com/Content/H5/img/help1.png" alt=""></a></li>
				<li><a href="http://m.vancl.com/app/d"><img src="http://i10.m.vancl.com/Content/H5/img/download1.png" alt=""></a></li>
				<li><a href="http://m.vancl.com/help/default/156"><img src="http://i10.m.vancl.com/Content/H5/img/weixin1.png" alt=""></a></li>
				<li><a href="http://www.vancl.com/?gotowap=0"><img src="http://i10.m.vancl.com/Content/H5/img/pcsite1.png" alt=""></a></li>
			</ul>
		<p class="beian">京ICP证100557号</p></div>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	const Head = r => require.ensure([], ()=>r(require('@/components/Head.vue')), 'Head')
	const Footer= r => require.ensure([], ()=>r(require('@/components/Footer.vue')), 'Footer')
	const List= r => require.ensure([], ()=>r(require('@/components/List.vue')), 'List')
	
	export default{
		data(){
			return{
				lists:[],
//				show:[]
			}
		},
		mounted(){
			var mySwiper = new Swiper('.swiper-container',{
				pagination : '.swiper-pagination',
				loop:true,
				paginationClickable :true,
				autoplay:5000
			})
		},
		created(){
			var _this=this;
			$.get("/vacal",function(data){
				console.log(data.goodshow);
				_this.lists=data.indeximg;
//				_this.show=data.goodshow;
			})
		},
		components:{
			Head,
			Footer,
			List
		},
		methods:{
			gohead(){
				document.body.scrollTop = 0;				
				document.documentElement.scrollTop=0;
			}
		}
	}
</script>

<style scoped="scoped">
	.container{
		width:100%;
		margin-bottom:0.52rem
	}
	*{
		padding: 0;
		margin: 0;
	}
	.swiper-slide img{
		width:3.75rem;
		height:auto;
	}
	.tou{
		width:100%;
		height:0.48rem;
		line-height: 0.32rem;
		background: #b81c22;
	}
	.tou .searchbox{
		float: left;
		background: white;
		height:0.32rem;
		margin-left: 0.1rem;
		margin-top: 0.09rem;
		width:85%;
		border-radius: 0.05rem;
	}
	.tou .searchbox .icon-fenlei{
		margin-left: -0.3rem;
		margin-right: 0.2rem;
	}
	.tou .searchbox input{
		border: 0;
		outline: none;
	}
	.tou  .msg{
		float: right;
		width:0.23rem;
		height:0.18rem;
		border: 1px solid white;
		border-radius: 0.05rem;
		margin-top: 0.15rem;
		margin-right: 0.1rem;
		line-height: 0.1rem;
		color: #fff;
	}
	.mo{
		width:3.75rem;
		height:0.47rem
	}
	.moo{
		width:3.75rem;
		height:0.29rem
	}
	.newgoods{
		width:3.75rem;
		height:2.05rem
	}
	.more{
		width:100%;
		display: flex;
		justify-content: flex-start;

	}
	.more img{
		width:1.87.5rem;
		height:0.44rem;
		
	}
	.aa{
		background:#f2f2f2 ;
	}
	.log {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 10vh;
				
				
	}
	.login,.sign {
		width: 20vw;
		font-size: 14px;
		background: #fff;
		height: 4vh;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 5px;
	}
	.user {
		display: none
	}
	.link {
		margin: 1vh   auto;
		width: 60vw;
		display: flex;
		justify-content: space-around;
		border-bottom: 1px solid #ccc;
		border-top: 1px solid #ccc;
		padding: 2vh 0;
		background:#f2f2f2 ;		
		
	}
	.link img {
		width: 10vw;
	}
	.beian {
		margin-bottom: 8vh;
		font-size: 14px;
	}
	
</style>