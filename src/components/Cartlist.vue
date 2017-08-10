<template>
	<div>
		<p class="up">
			<span>在售商品:</span>
			<button class="btn2" :class="{gray:graych}">删除</button>			
			<button class="btn1" @click="handlecheck">{{btnval}}</button>						
		</p>
		<div class="listbox">
			<div class="All" v-for="(item,key) in lists">
	 			<input type="checkbox" class="inp" v-model="item.check" @click="dan(key)">
	 			<div class="lef">
	 				<img :src="item.img" alt="">
	 				<span class="xie">{{item.name}}</span>
	 				<span class="colo">颜色：{{item.color}}&nbsp;&nbsp; &nbsp;尺码：{{item.size}}</span>
	 				<span class="siz"></span>	
	 				<span @click="dele(key)"class="iconfont icon-shanchu"></span>
	 				<p class="pri">
	 					<span class="price">￥{{item.price}}</span>
		 				<span class="miu" @click="jian(key)">-</span>
		 				<input type="number"class="inp1"v-model="item.count">
		 				<span class="add" @click=jia(key)>+</span>
	 				</p>
 				</div>

			</div>

		</div>
	
	</div>
</template>

<script>
	export default{
		data(){
			return{
				btnval:'全不选',
				graych:false,
				lists:[],
				aaa:true,
			}
		},
		props:['pay'],
		methods:{
			handlecheck(){
				if(this.btnval=='全不选'){
					this.btnval='全选';
					this.lists.forEach((item)=>{
						item.check=false
					})
									
				}else{
					this.btnval='全不选'
					this.graych=!this.graych;					
					this.lists.forEach((item)=>{
						item.check=true
					})
				}
				
			},
			dele(key){
				var newlist=this.lists;
				/*newlist.forEach((ele){
					if(key==ele.id){
						 
					}
				})*/
				
			},
			jian(key){
				if(this.lists[key].count>1)
				this.lists[key].count--;			
			else
				this.lists[key].count=1;	
			},
			jia(key){
				this.lists[key].count++;
				var p=0;
				var _this=this;
//				this.lists.forEach((item)=>{
//					console.log(p);
//					if(item.check===true){
//						p+=item.count*item.price;
//					}
//					console.log(p)
//				});
//				console.log(p);
//				this.$emit("pay",p);
             for(var i=0,len=_this.lists.length;i<len;i++){
             	if(_this.lists[i]['check']){
             		p+=_this.lists[i].count*_this.lists[i].price;
             	}
             }
             console.log(this.lists[key].price);
				this.$emit("pay",p);
			},
			dan(key){
				var flag=false;
				this.lists.forEach((item)=>{
					if(!item.check){
						flag=true;
					}
				})
				flag===true?this.btnval='全不选':this.btnval='全选';
			}
		},
		created(){
			var pro=localStorage.getItem("incart");
			this.lists=JSON.parse(pro);
		}
	}
</script>

<style scoped="scoped">
	.listbox{
		margin-bottom: 0.45rem;
	}
	.itembox{
		text-align: left;
		padding:0.2rem;
	}
	.gray{
		background:#b2b2b2 !important;
	}
	.up{
		height:0.3rem;
		font-size: 0.13rem;
		padding:0 0.2rem;
		text-align: left;
		line-height: 0.3rem;
	}
	.up button{
		float: right;
		margin-left:0.2rem;
		margin-top: 0.05rem;
		background: #B81C22;
		color: white;
		border: none;
		font-size: 0.14rem;
		outline: none;
	}

	.All{
		width: 3.75rem;
		height: 1rem;
		line-height:1rem;	
		position: relative;
		font-size: 0.12rem;
		margin-bottom: 0.2rem;
	}
	.All  .inp{
		margin-top: 10%;
		width: .2rem;
		height: .2rem;
		margin-left: .13rem;
		vertical-align: middle;
		float: left;
	}
	.All .lef{
		float: left;
		width:3.1rem;
		border-bottom: 1px solid #e3e3e3;
	}
	.All .lef img{
		width: 0.95rem;
		height: 0.95rem;
		margin-left: 0.069rem;
		float: left
	}
	.All .lef>span{
		display: block;
	}
	.All .lef .xie{
		text-align: left;
		line-height: 0.35rem;
		color: #4c4c4c;

	}
	.All .lef .colo{
		color:#4c4c4c;
		line-height: .2rem;
		float: left;

	}
	.icon-shanchu{
		line-height: .2rem;
		margin-left:2.7rem;
		font-size: 30px

	}
	.All .lef .pri{
		line-height: 0.35rem;
		text-align: left;
	}
	.All .lef .price{
		color: #b81c22;
	}
	.All .lef .miu,.All .lef .add{
		margin-left: 0.06rem;
		display: inline-block;
		width:.27rem;
		height: .27rem;
		line-height: 0.27rem;
		background-color:#f3f3f3 ;
		text-align: center;
		font-size: 0.2rem;			
	}
	.All .lef .inp1{
		text-align: center;
		margin-left: 0.06rem;
		width:.23rem;
		height: .23rem;
		outline: none;
	}

	
</style>