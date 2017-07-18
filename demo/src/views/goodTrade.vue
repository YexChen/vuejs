<template>
  <div id="app">
  	我是购物车页面哦吼吼吼吼吼
  	<span>{{$route.params.goodsId}}</span>
  	<span>{{$route.params.goodsClass}}</span>
  	<br>
  	<router-link to = "/goods/title">显示标题页面</router-link>
  	<router-link to = "/goods/image">显示图片页面</router-link>
  	<!-- <router-link to = "/cart">跳转到购物车</router-link> -->
    <!-- <button v-on:click = "toCart">跳转到购物车</button> -->
    <router-link v-bind:to = "{name : 'cart',params : {cartName : 123}}">跳转到购物车</router-link>
	<div>
    	<router-view></router-view>
    </div>
  </div>
</template>

<script>

  export default{
    data(){
      return {
        msg : "hello world"
      }
    },
    methods:{
      toCart(){
        // this.$router.push("/cart"); 可行
        // this.$router.push({path : "/cart"}); 可行
        this.$router.push({path : "/cart?goodsId=hahaha"});

      }
    }
  }

</script>