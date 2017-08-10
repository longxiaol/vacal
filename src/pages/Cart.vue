<template>
	<div>
		<Head :val="val"></Head>
		<div class="container">
			<div class="start" v-if="msg==0">
				<div class="frame">
					<img src="../../static/img/cart1.png" alt="" />
				</div>
				<div class="collection">
						<a href="http://m.vancl.com//Favorite/Index">我的收藏</a>
						<router-link to='/home'>去逛逛</router-link>
				</div>
				<div class="user">
					<span>156</span>
					<i>|</i>
					<router-link to="/login">退出</router-link>
				</div>
				<Footer></Footer>
			</div>
			
			<div class="goods" v-if="msg==1">
				<Cartlist  @pay="total"></Cartlist>
				<div class="cartFoot">
					<div class="totalPrice">
						<p>需支付:<span>￥{{totalprice}}元</span></p>
						<p class="price">总金额:￥{{price}}元 已优惠:￥{{offer}}元</p>
					</div>
					<button class="settlement">结算（{{num}}）</button>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	const Head = r => require.ensure([], ()=>r(require('@/components/Head.vue')), 'Head')
	const Footer = r => require.ensure([], ()=>r(require('@/components/Footer.vue')), 'Footer')
	const Cartlist = r => require.ensure([], ()=>r(require('@/components/Cartlist.vue')), 'Cartlist')
	
	
	export default{
		data(){
			return{
				val:'购物车',
				msg:1,
				totalprice:0

			}
		},
		methods:{
			total(xx){
				this.totalprice=xx;
			}
		},
		components:{
			Head,
			Footer,
			Cartlist
		},
		created(){
			var pro=JSON.parse(localStorage.getItem('incart'));
			if(pro==null)
				pro=[];
			if(pro.length==0)
				this.msg=0;
				else
					this.msg=1;
		}
	}
</script>

<style scoped="scoped">
	a{
		text-decoration: none;
	}
	.frame{
		margin:0.2rem auto;
		width:3.2rem;
		height:2.44rem;
		line-height: 2.44rem;
		border: 2px solid #d9d9d9;
	}
	.collection {
		margin:0.25rem;
		display: flex;
		justify-content: space-between;
	}
	.collection a {
		line-height: 0.35rem;
		width:1.56rem;
		display: inline-block;
		height:0.35rem;
		background: #f5f5f5;
		font-size: 0.14rem;
		color: #000;
	}
	.user{
		margin-top:0.8rem;
	}
	.user a{
		color: #000;
	}
	.cart {
		
	}
	.cartFoot {
		width: 100%;
		display: flex;
		justify-content: space-between;
		position: fixed;
		bottom: 0;
		padding: 1vh 5vw;
		box-sizing: border-box;
		background: #f5f5f5;
		border-top: 1px solid #999;
	}
	.totalPrice {

	}
	.totalPrice p {
		text-align: left;
	}
	.totalPrice p span {
		color: #b81c22
	}
	.totalPrice .price {
		font-size: 12px;
	}
	.settlement {
		background: #b81c22;
		border: none;
		width: 30vw;
		color: #fff;
		font-size: 16px;
		font-weight: bold;
		
	}
</style>