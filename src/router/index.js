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
  },
  {
    path: '/task2_5',
    name: 'Task2_5',
    component: () => import(/* webpackChunkName: "about" */ '../views/lesson2/task2_5.vue')
  },
  {
    path: '/task2_6',
    name: 'Task2_6',
    component: () => import(/* webpackChunkName: "about" */ '../views/lesson2/task2_6.vue')
  },
  {
    path: '/task3_1',
    name: 'Task3_1',
    component: () => import(/* webpackChunkName: "about" */ '../views/lesson3/task3_1.vue')
  },
  {
    path: '/task3_2',
    name: 'Task3_2',
    component: () => import(/* webpackChunkName: "about" */ '../views/lesson3/task3_2.vue')
  },
  {
    path: '/task3_3',
    name: 'Task3_3',
    component: () => import(/* webpackChunkName: "about" */ '../views/lesson3/task3_3.vue')
  },
  {
    path: '/task3_4',
    name: 'Task3_4',
    component: () => import(/* webpackChunkName: "about" */ '../views/lesson3/task3_4.vue')
  },
  {
    path: '/task3_5',
    name: 'Task3_5',
    component: () => import(/* webpackChunkName: "about" */ '../views/lesson3/task3_5.vue')
  },
  {
    path: '/task4_1',
    name: 'Task4_1',
    component: () => import(/* webpackChunkName: "about" */ '../views/lesson4/task4_1.vue')
  },
  {
    path: '/task4_2',
    name: 'Task4_2',
    component: () => import(/* webpackChunkName: "about" */ '../views/lesson4/task4_2.vue')
  },
  {
    path: '/task4_3',
    name: 'Task4_3',
    component: () => import(/* webpackChunkName: "about" */ '../views/lesson4/task4_3.vue')
  },
  {
    path: '/task4_4',
    name: 'Task4_4',
    component: () => import(/* webpackChunkName: "about" */ '../views/lesson4/task4_4.vue')
  },
  {
    path: '/task5_1',
    name: 'Task5_1',
    component: () => import(/* webpackChunkName: "about" */ '../views/lesson5/task5_1.vue')
  },
  {
    path: '/task5_2',
    name: 'Task5_2',
    component: () => import(/* webpackChunkName: "about" */ '../views/lesson5/task5_2.vue')
  },
  {
    path: '/task5_3',
    name: 'Task5_3',
    component: () => import(/* webpackChunkName: "about" */ '../views/lesson5/task5_3.vue')
  },
  {
    path: '/task5_4',
    name: 'Task5_4',
    component: () => import(/* webpackChunkName: "about" */ '../views/lesson5/task5_4.vue')
  },
  {
    path: '/task6_1',
    name: 'Task6_1',
    component: () => import(/* webpackChunkName: "about" */ '../views/lesson6/task6_1.vue')
  },
  {
    path: '/task6_2',
    name: 'Task6_2',
    component: () => import(/* webpackChunkName: "about" */ '../views/lesson6/task6_2.vue')
  },
  {
    path: '/task6_3',
    name: 'Task6_3',
    component: () => import(/* webpackChunkName: "about" */ '../views/lesson6/task6_3.vue')
  },
  {
    path: '/task6_4',
    name: 'Task6_4',
    component: () => import(/* webpackChunkName: "about" */ '../views/lesson6/task6_4.vue')
  },
  {
    path: '/task6_5',
    name: 'Task6_5',
    component: () => import(/* webpackChunkName: "about" */ '../views/lesson6/task6_5.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
