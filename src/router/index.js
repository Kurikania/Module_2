import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/task2',
    name: 'Task2',
    component: () => import(/* webpackChunkName: "about" */ '../views/task2.vue')
  },
  {
    path: '/task3',
    name: 'Task3',
    component: () => import(/* webpackChunkName: "about" */ '../views/task3.vue')
  },
  {
    path: '/task4',
    name: 'Task4',
    component: () => import(/* webpackChunkName: "about" */ '../views/task4.vue')
  },
  {
    path: '/task5',
    name: 'Task5',
    component: () => import(/* webpackChunkName: "about" */ '../views/task5.vue')
  },
  {
    path: '/task2_1',
    name: 'Task2_1',
    component: () => import(/* webpackChunkName: "about" */ '../views/lesson2/task2_1.vue')
  },
  {
    path: '/task2_2',
    name: 'Task2_2',
    component: () => import(/* webpackChunkName: "about" */ '../views/lesson2/task2_2.vue')
  },
  {
    path: '/task2_3',
    name: 'Task2_3',
    component: () => import(/* webpackChunkName: "about" */ '../views/lesson2/task2_3.vue')
  },
  {
    path: '/task2_4',
    name: 'Task2_4',
    component: () => import(/* webpackChunkName: "about" */ '../views/lesson2/task2_4.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
