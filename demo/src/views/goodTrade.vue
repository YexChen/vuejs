<template>
  <div id="app">
  	我是购物车页面哦吼吼吼吼吼
  	<span>{{$route.params.goodsId}}</span>
  	<span>{{$route.params.goodsClass}}</span>
  	<br>
  	<router-link to = "/goods/title">显示标题页面</router-link>
  	<router-link to = "/goods/image">显示图片页面</router-link>
  	<router-link to = "/cart">跳转到购物车</router-link>
	<div>
    	<router-view></router-view>
    </div>
  </div>
</template>

