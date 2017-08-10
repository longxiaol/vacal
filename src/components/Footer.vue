<template>
	<div class="footer">
		<ul>
			<li><router-link to='/home'><i class="iconfont icon-home"></i><span>凡客</span></router-link></li>
			
			<li><router-link to='/class'><i class="iconfont icon-fenlei"></i><span>分类</span></router-link></li>
			
			<li><router-link to='/custom'><i class="iconfont icon-dingzhifuwu"></i><span>定制</span></router-link></li>
			
			<li><router-link to='/cart'>
				<div class="circle">1</div>
				<i class="iconfont icon-gouwucheshoppingcart"></i>
				<span>购物车</span></router-link>
			</li>
			
			<li><router-link to='/login' @click.prevent="gologin"><i class="iconfont icon-wode"></i><span>我的</span></router-link></li>
		</ul>
		
	</div>
</template>

<script>
export default {
  name: 'head',
  data () {
    return {
      curPage:'home'
    }
  },
  methods:{
  	changecolor(page){
  		this.curPage=page;
  	},
  	gologin(){
  		this.$router.push('login');
  	}
  }
  
}
</script>

<style scoped>
	.circle{
		width:0.12rem;
		height:0.12rem;
		background:#b81c22 ;
		border-radius: 0.06rem;
		position: absolute;
		left:2.66rem;
		top:0.025rem;
		color: white;
		text-align: center;
		line-height: 0.12rem;
		font-size: 0.1rem;
	}
	.footer ul{
		position:fixed;
		bottom: 0;
		width:3.75rem;
		height:0.51rem;
		display: flex;
		width:3.75rem;
		height:0.51rem;
		border-top: 1px solid #990;
		background: #fff;
		margin-top:0.52rem
	}
	.router-link-active{
		color: #b81c22;
	}
	li{
		flex: 1;
		height:0.51rem;
		margin-top: 0.05rem;
	}
	li a {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		text-decoration: none;
		color:#999 ;	
		}
	li a .iconfont{
		font-size: 0.25rem;
	}
	li a span{font-size: 0.13rem;
	}

</style>