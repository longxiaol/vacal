<template>
	<div>
		<Head :val='val'></Head>
		<div class="container">
			<div class="swiper-container">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide"><img :src="list.url1"/></div>
			        <div class="swiper-slide"><img :src="list.url2"/></div>		        
			    </div>
			    <div class="swiper-pagination"></div>
			</div>
			<div class="pro-tit">
				<span class="name">{{list.name}}</span><span class="price">{{list.price}}</span>
				<div><a href="/CashReCharge/index">充100返100，点击充值</a></div>
			</div>
			<div class="bb"></div>
			<div class="prd-size" @click="handlehide">
				<span class="size-info">选择&nbsp;颜色/尺码</span>
				<span class="sword">></span>
			</div>
			<div class="boxhide" v-if="hide">
				<h4>选择颜色</h4>
				<p>
					<span :class="{checkborder:curcolor=='白色'}" @click="curcolor='白色'">白色</span>
					<span :class="{checkborder:curcolor=='黑色'}" @click="curcolor='黑色'">黑色</span>
				</p>
				<h4>尺码选择</h4>
				<p>
					<span :class="{checkborder:cursize=='XS'}" @click="cursize='XS'">XS</span>
					<span :class="{checkborder:cursize=='S'}" @click="cursize='S'">S</span>
					<span :class="{checkborder:cursize=='M'}" @click="cursize='M'">M</span>
					<span :class="{checkborder:cursize=='L'}" @click="cursizee('L')">L</span>
				</p>
				<h4>购买数量</h4>
				<p>
					<span @click="countcut">--</span>
					<span>{{count}}</span>
					<span @click="count++">+</span>
				</p>
			</div>
			<div class="bb"></div>			
		
		
		<ul class="xid">
			<li @click="curli=1"><router-link to>商品详情</router-link></li>
			<li @click="curli=2"><router-link to>评论</router-link></li>
			<li @click="curli=3"><router-link to>咨询</router-link></li>	
		</ul>
		<div v-if="curli==1" class="modul">
			<img src="http://i9.m.vancl.com/oms/2017_7_21_10_31_42_9418_640x159.jpg" alt="" />
			<img src="http://i4.m.vancl.com/oms/2017_7_21_10_31_42_4401_640x567.jpg" alt="" />
			<img src="http://mimages.vancl.com/oms/2017_7_21_10_31_42_149_640x494.jpg" alt="" />
			<img src="http://i9.m.vancl.com/oms/2017_7_21_10_23_30_9380_640x106.jpg" alt="" />
			<img src="http://i6.m.vancl.com/oms/2017_7_21_10_23_30_6000_640x466.jpg" alt="" />
			<img src="http://i7.m.vancl.com/oms/2017_7_21_10_23_30_7395_640x546.jpg" alt="" />
		</div>
		<div v-if="curli==2" class="zixun">
			<p>我要评论：</p>	
			<p>写</p>
			<p>信息</p>
			<p>小学生</p>
			<p>信息</p>			
			<button>提交</button>
		</div>
		<div v-if="curli==3" class="zixun">
			<p>我要咨询：</p>	
			<p>zz</p>
			<p>zzz</p>
			<p>zz</p>
			<p>zzz</p>			
			<button>提交</button>
		</div>
		<div class="foot">
			<div class="circle">1</div>			
			<router-link to class="iconfont icon-gouwucheshoppingcart"></router-link>
			<router-link to ><span @click="addcart">加入购物车</span></router-link>			
		</div>


	</div>
	</div>
</template>

<script>
	const Head = r => require.ensure([], ()=>r(require('@/components/Head.vue')), 'Head')
	export default{
		data(){
			return{
				val:'商品详情',
				hide:false,
				curli:1,
				count:1,
				curcolor:'',
				cursize:'',
				list:{},
				product:[]
			}
		},
		components:{
			Head
		},
		methods:{
			handlehide(){
				this.hide=!this.hide
			},
			countcut(){
				if(this.count<=1){
					this.count=1;
				}else{
					this.count--;}
			},
			check(){
				this.checked=!this.checked;
			},
			cursizee(x){
				this.cursize=x;
			},
			addcart(){
				var aa=this.product=localStorage.getItem("incart");
				var a=JSON.parse(aa);
				var goods={
					check:true,
					id:this.list.id,
					img:this.list.url1,
					name:this.list.name,
					color:this.curcolor,
					size:this.cursize,
					price:this.list.price,
					count:this.count
				};
				if(a==null){
					a=[];
					a.push(goods);
					var promsg=JSON.stringify(a)
					localStorage.setItem("incart",promsg);
				}else{
				
					var exist=a.find((elem)=>{
						return elem.id==goods.id&&elem.color==goods.color&&elem.size==goods.size})
					
					if(exist==undefined){
						a.push(goods);
						var promsg=JSON.stringify(a);
						localStorage.setItem("incart",promsg);						
					}
					var idx=a.findIndex(function(elem){return elem==exist})
					/*exist.count+=goods.count;
						a.splice(idx,1,exist);  //替换*/
					a[idx].count+=goods.count;
					var promsg=JSON.stringify(a);
					localStorage.setItem("incart",promsg);								
				}
			}
		},
		created(){
			var _this=this;
			$.get("/vacal",function(data){
				var id=_this.$route.params.id;
				_this.list=data.details[id-1];
			})
			
		},
		mounted(){ 
			var mySwiper = new Swiper('.swiper-container',{
				pagination : '.swiper-pagination',
				loop:true,
				paginationClickable :true,
				autoplay:5000
			});	
			
 
			var head = $('.xid');
			var headHeight = 400;
			console.log($(".price").outerHeight());
			$(window).on('scroll',function(){
				var scrollTop = document.body.scrollTop||document.documentElement.scrollTop;//滚动条距顶部距离
		
				if(scrollTop>headHeight){//距离大于吸顶元素高度，改变元素样式
					$(".xid").css({position:"fixed",top:0})
				}else{
					$(".xid").css({position:"relative"})
				}
				$(".xid").css({background:"#fff"})
				
			})
			
		}
	}
</script>

<style scoped="scoped">
	.circle{
		width:0.1rem;
		height:0.1rem;
		background:#b81c22 ;
		border-radius: 0.05rem;
		position: absolute;
		left:1rem;
		top:0.04rem;
		color: white;
		text-align: center;line-height: 0.1rem;
		font-size: 0.1rem;
	}
	.checkborder{
		border:1px solid #b81c22 !important;
	}
	.zixun{
		width:3.75rem;
		height:5.8rem
	}
	.text{
		
	}
	.iconfont{
		border-top: 1px solid #ccc;
	}
	.router-link-active{
		color: #b81c22;
	}
	body{
		position: relative;
	}
	.modul img{
		width:3.75rem;
	}
	.modul img:nth-child(1),.modul img:nth-child(3){
		height:0.93rem;
	}
	.modul img:nth-child(2){
		height:3.32rem;
	}.modul img:nth-child(3){
		height:2.89rem;
	}
	a{text-decoration: none;}
	.foot{
		height:0.36rem;
		line-height: 0.36rem;
		width:100%;
		position: fixed;
		bottom: 0;
		display: flex;
		background: #fff;
	}
	.foot a{
		flex: 1;
		
	}
	.foot a:nth-child(2){
		font-size:0.35rem ;
		color: #ccc;
	}
	.foot a:nth-child(3){
		font-size: 0.15rem;
		color: white;
		background:#b81c22 ;
	}
	.head{
		position: relative;
	}
	.container{
		margin-bottom: 0.4rem;
	}
	.swiper-slide img{
		width:2.98rem;
		height:2.98rem;
	}
	.pro-tit{
		/*width:3.75rem;*/
		height:0.5rem;
		padding:0.1rem 0.2rem;
		text-align: left;
	}
	.pro-tit .name{
		font-size: 0.14rem;
		color: #4c4c4c;
	}
	.pro-tit .price{
		margin-left: 0.3rem;
		font-size:0.18rem;
		color:#c8161e;
	}
	.pro-tit a{
		display: inline-block;
		margin-top: 0.06rem;
		text-decoration: none;
		color:#c8161e;
		font-size: 0.14rem;
	}
	.bb{
		margin:0 0.2rem;
		height:0.01rem;
		background: #ccc;
	}
	.prd-size{
		height:0.39rem;
		line-height: 0.39rem;
		/*padding:0.1rem 0.2rem;*/
		margin:0.1rem 0.2rem;
		text-align: left;
		background: #f5f5f5 url(../../static/img/bb.png) no-repeat 0.1rem;		
	}
	.prd-size .size-info{
		font-size: 0.15rem;
		color:#4c4c4c;
		margin-left: 0.4rem;
		float: left;
	}
	.prd-size .sword{
		float: right;
		font-size: 0.23rem;
		color:#4c4c4c;
		margin-right: 0.15rem;
	}
	.boxhide{
		text-align:left;
		padding:0 0.2rem;
	}
	.boxhide h4{
		color:#4d4d4d;
		font-size:0.12rem ;
		margin-top: 0.1rem;
	}
	.boxhide p{
		margin-top: 0.1rem;
	    margin-bottom: 0.2rem;
	    border-bottom: 1px solid #ccc;

	    /*margin-bottom: 0.9rem;*/
	}
	.boxhide p:nth-of-type(1) span{
	    text-align: center;
	    display: inline-block;		
		width:0.45rem;
		height:0.32rem;
		line-height: 0.32rem;
		margin-bottom: 0.1rem;
		margin-right: 0.1rem;
		border: 1px solid #b3b3b3;

	}
	.boxhide p:nth-of-type(2) span{
		margin-bottom: 0.1rem;
	    text-align: center;				
		display: inline-block;
		width:0.45rem;
		height:0.32rem;
		line-height: 0.32rem;
		border: 1px solid #b3b3b3;
	}
	.boxhide p:nth-of-type(3){
		border: none;
	}
	.boxhide p:nth-of-type(3) span{
		display: inline-block;
		width:0.26rem;
		height:0.26rem;
		border: 1px solid #b3b3b3;
		line-height: 0.26rem;
		text-align: center;
		font-size: 0.2rem;
		/*margin-bottom: 0.1rem;*/
		
	}
	.xid{
		display: flex;
		justify-content:center;
		width:100%;
		height:0.5rem;
		line-height:0.5rem;
		border-bottom: 1px solid #000;
	}
	.xid li{
		flex: 1;
		font-size: 0.13rem;
	}
	.xid li a{
		text-decoration: none;
		color: #4c4c4c;
	}
</style>