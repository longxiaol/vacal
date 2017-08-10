<template>
	<div>
	  <div class="head">
	  	<div class="go" @click="goback"></div>{{val}}
	  </div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  props:['val'],
  methods:{
  	goback(){
  		this.$router.go(-1);
  	}
  }
}
</script>


<style scoped>
	body{
		font-size: 16px;
	}
	.head{
		width:100%;
		height:0.48rem;
		line-height: 0.16rem;
		/*position: fixed;
		top: 0;*/
		color: white;
		font-size:.18rem;
		text-align: center;
		background:#b81c22;
		/*z-index: 66;*/
	}
	.head .go{
		width:0.16rem;
		height:0.16rem;
		border-top: 2px solid white;
		border-left: 2px solid white;
		transform: translateY(0.18rem) translateX(0.2rem) rotate(-45deg);
	}

</style>
