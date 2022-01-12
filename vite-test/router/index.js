import * as vueRouter from 'vue-router'
import HelloWorld from '../src/components/HelloWorld.vue'
import Test from '../src/components/Test.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
]

const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes
})

export default router
