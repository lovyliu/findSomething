import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FindSomething from '@/components/FindSomething'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FindSomething',
      component: FindSomething
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
