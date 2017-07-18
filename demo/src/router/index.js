import Vue from 'vue'
import Router from 'vue-router'
import goodTrade from '@/views/goodTrade'
import Title from '@/views/title'
import Image from '@/views/image'
import Cart from '@/views/cart'

Vue.use(Router)

export default new Router({
  // mode : "history",
  routes: [
    {
      path: '/',
      name: 'goodTrade',
      components: {
        default : goodTrade,
        title : Title,
        image : Image
      },
      children : [
      	{
      		path : "title",
      		name : "title",
      		component : Title
      	},
      	{
      		path : "image",
      		name : "image",
      		component : Image
      	}
      ]
    },
    {
    	path : "/cart:cartName",
    	name : "cart",
    	component : Cart
    }
  ]
})
