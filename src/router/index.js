import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Store from '@/views/Store.vue';
import Product from '@/views/Products.vue';
import Detail from '@/views/Detail.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product',
    name: 'product',
    component: Product
  },
  {
    path: '/store',
    name: 'store',
    component: Store
  },
  {
    path: '/Detail/:id',
    name: 'Detail',
    component: Detail,
    props: true
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
