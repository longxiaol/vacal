<template>
	<div>
		<Head :val="val"></Head>
		<div class="logBox">
		<div class="change">
			<span class="pu" @click="msg=1" :class="bool?'hot':''">普通登录</span>
			<span class="speed" @click="msg=0">快捷登录</span>			
		</div>
		<div v-if="msg==1" class="normalLog">
			<div class="normalLogIpt">
				<input type="text" placeholder="点击输入手机号/Email"/>
				<input type="password" placeholder="请输入密码"/>
				<button>登录</button>
			</div>
			<div class="goSign">
					<span><router-link to='/register'>免费注册 &gt;</router-link></span>
					<span><a href="http://m.vancl.com/User/RetrieveStep1">手机账号找回密码 &gt;</a></span>
			</div>
		</div>
		<div v-else class="elselog">
			aaaa
		</div>
		<p class="otherLog">使用其他账户登录</p>
				<ul class='otherLogLink'>
					<li><img src="../../static/img/zhifubao.svg" alt=""></li>
					<li><img src="../../static/img/新浪.svg" alt=""></li>
					<li><img src="../../static/img/小米.svg" alt=""></li>
					<li><img src="../../static/img/QQ.svg" alt=""></li>
				</ul>
		</div>
	</div>
</template>

<script>
	const Head = r => require.ensure([], ()=>r(require('@/components/Head.vue')), 'Head')
	export default{
		data(){
			return{
				val:"登录",
				msg:1,
				bool:true
			}
		},
		components:{
			Head
		}
	}
</script>

<style scoped>
	.hot{
		border-bottom: 3px solid #b81c2;
	}
	.logBox {
		padding: 0 0.2rem;
	}
	.change {
		display: flex;
		line-height: 0.4rem;
		justify-content: space-between;
	}
	.change span{
		flex: 1;
	}
	.normalLogIpt {
		height: 30vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-top: 8vh;
	}
	.normalLogIpt input {
		height: 0.3rem;
		background: #f5f5f5;
		border: none;
		padding: 0 0.1rem;
		outline: none
	}
	.normalLogIpt button {
		background: #b81b22;
		border: none;
		height: 6vh;
		border-radius: 2px;
		overflow: hidden;
		color: #fff;
		font-size: 16px;
		margin-top: 3vh;
		outline: none
	}
	.goSign {
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		margin-top: 2vh;
	}
	.goSign span a {
		color: #666
	}
	.otherLog {
		margin-top: 4vh;
		font-size: 12px;
		text-align: left;
	}
	.otherLogLink {
		display: flex;
		width: 45vw;
		justify-content: space-between;
		margin-top: 1vh;
	}
	.otherLogLink img {
		width: 8vw;
	}
</style>