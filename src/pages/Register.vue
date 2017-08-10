<template>
	<div>
		<Head :val="val"></Head>
		<div class="regbox">
			<div class="code">				
				<div class="inputbox"><input type="text"  placeholder="请输入图片验证码"/></div>
				<img class="img" id="validateCodeImg" @click="code"src="http://www.fengbuy.com/ucenter-client/index/validateCode" alt="" />
			</div>
			<div class="phone">				
				<div class="inputbox"><input type="text"  placeholder="请输入手机号"/></div>
				<div class="getcode">获取验证码</div>
			</div>
			<div class="test">				
				<input type="text"  placeholder="请输入手机验证码"/>
			</div>
			<div class="psd">				
				<input type="password"  placeholder="密码：6-16位字母，数字，特殊字符"/>
			</div>
			<p class="agree">注册账号即便是同意遵守<a href="">《VANCL凡客服务条款》</a></p>
			<button class="reg">点击注册</button>
		</div>
	</div>
</template>

<script>
	const Head = r => require.ensure([], ()=>r(require('@/components/Head.vue')), 'Head')
	export default{
		data(){
			return{
				val:"注册"
			}
		},
		components:{
			Head
		},
		methods:{
			code(){
				$(".img").on("click",function(){
		   			var ran=Math.random()	
					$("#validateCodeImg").attr("src",'http://www.fengbuy.com/ucenter-client/index/validateCode/?'+ran);
				    $("#validateCode").focus();			 
			   })		

			}
		}
	}
</script>

<style>
	.regbox{
		/*margin-top:0.48rem;*/
		padding:0.3rem
	}
	.phone{
		overflow: hidden;
		margin-bottom: 0.1rem;
	}
	.code,.test{
		/*display: flex;*/
		margin-bottom: 0.2rem;
		overflow: hidden;
	}
	.test,.psd{
		width:100%;
		height:0.37rem;
		line-height: 0.37rem;
		background:#f5f5f5 ;
	}
	.test input,.psd input{
		width:2rem;
		margin-left: -0.75rem;
	}
	.code .inputbox,.phone .inputbox{
		float: left;
		width:1.89rem;
		height:0.37rem;
		line-height: 0.37rem;
		background:#f5f5f5 ;
	}
	.code .inputbox input,.phone .inputbox input,.test input,.psd input{
		border: none;
		outline: none;
		background:#f5f5f5 ;
		
	}
	.code img{
		float: left;
		display: inline-block;
		width:0.8rem;
		height:0.33rem;
		border:1px solid #999;
		margin-left: 0.4rem;
		background:#f5f5f5 ;
		
	}
	.getcode{
		float: left;
		width:1.03rem;
		height:0.45rem;
		margin-left: 0.15rem;
		line-height: 0.45rem;
		border:2px solid #b2b2b2;
		border-radius: 0.06rem;
		color: #b71c22;
	}
	.agree{
		font-size: 0.12rem;
		color: #b3b3b3;
	    text-align: center;
	    margin-top: 3em;
	    margin-bottom: 1.5em;
	}
	.agree a{
		color:#000 ;
		text-decoration: none;
	}
	.reg{
		width:100%;
		height:0.45rem;
		background: #b81b22;
		color: white;
		font-size: 0.16rem;
		border: none;
		border-radius: 0.03rem;
	}
</style>