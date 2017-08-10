<template>
	<table>
	  <thead>
		<tr>
		    <td><input type="checkbox" v-model="allChecked" @click="all"/></td>
			<td>商品编号</td>
			<td>商品价格</td>
			<td>商品数量</td>
			<td>商品操作</td>		   
		</tr>
	  </thead>	
	  <tbody>
	  	<tr v-for="(item,index) in lists">
	  	    <td><input type="checkbox" v-model="item.danChecked" @click="dan"/></td>
	  		<td>{{item.num}}</td>
			<td>{{item.name}}</td>
			<td><span class="add" @click="add(index)">+</span><input type="text" v-model="item.amount" @blur="blur1"/><span class="jian" @click="jian(index)">-</span></td>
			<td><button @click="dele(index)">删除</button></td>
	  	</tr>
	  </tbody>
	  <tfoot>总计：{{total}}元</tfoot>
	</table>
</template>
 

<script>
   var lists=[{num:1,name:10,amount:1,danChecked:false},{num:1,name:20,amount:1,danChecked:false},{num:1,name:30,amount:1,danChecked:false}]
	export default {
		data(){
			return{
				allChecked:false,
				lists:lists,
				total:0
				
			}
		},
		methods:{
			//全选
			all(){
				
              var flag=false;
              if(this.allChecked){
              	flag=true;
              }
              this.lists.forEach(function(item,index){
                item.danChecked=flag;
              })
            this.total1();
			},
			dan(){//单选
				var _this=this;
				var flag=true;
				this.lists.forEach(function(item,index){
                   if(!item.danChecked){
                   	flag=false;                   	
                   }                
              })
				flag==true?this.allChecked=true:this.allChecked=false;
				this.total1();
			},
			add(index){								
				this.lists[index].amount++;
				this.total1();
             },
             jian(index){								
				
				if(this.lists[index].amount===0){
                  this.lists[index].amount=0;
                  return;
				}
				this.lists[index].amount--;
				this.total1();
             }
             ,
             blur1(){
                 this.total1();
             },
             dele(index){
                this.lists.splice(index,1);
                this.total1();
             },
             total1(){//计算总金额，在其他函数内部调用自己封装的函数要加上this.函数名
             	var _this1=this;
             	 _this1.total=0;
                for(var i=0,len= _this1.lists.length;i<len;i++){

             	if(_this1.lists[i]['danChecked']){
             		_this1.total += _this1.lists[i].name *_this1.lists[i].amount;
             	}
             }   
              
			}
		}
	}
</script>


<style>
	table{
		height: 200px;
		width: 500px;
		/*border: 1px solid #ccc;*/
		margin:30px auto;
		border-collapse: collapse;
		text-align: center;
	}
		table td{
			height: 50px;
			width: 120px;
			border: 1px solid #ccc;
		}
		input{
			width: 30px;
		}
</style>