import Vue from 'vue'
import Router from 'vue-router'
import headers from '@/components/headers'
import sections from '@/components/sections'
import footers from '@/components/footers'
import goods from '@/components/goods'
import ratings from '@/components/ratings'
import seller from '@/components/seller'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path:'/goods',
  		component:goods
  	},
  	{
  		path:'/ratings',
  		component:ratings
  	},
  	{
  		path:'/seller',
  		component:seller
  	}
  ]
})
