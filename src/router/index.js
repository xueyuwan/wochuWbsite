import Vue from 'vue'
import Router from 'vue-router'
import manage from './../pages/manage.vue'
import home from './../pages/home.vue'
import need from './../pages/need.vue'
import buy from './../pages/Panicbuying.vue'
import newProduct from './../pages/new.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'manage',
    component: manage,
    children: [{
        path: '',
        name: 'home',
        component: home
      }, {
        path: '/need',
        name: 'need',
        component: need
      }, {
        path: '/buy',
        name: 'buy',
        component: buy
      },
      {
        path: '/new',
        name: 'new',
        component: newProduct
      }
    ]
  }]
})
