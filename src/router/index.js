import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import News from '@/components/News'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Home
  },
  {
    path: '/news/post1',
    component: News
  }
  ]
})
