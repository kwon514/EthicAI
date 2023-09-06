import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LandingView from '../views/LandingView.vue'
import LoginView from '../views/LoginView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: LandingView
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/references',
    name: 'references',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ReferencesView.vue')
  },
  {
    path: '/chatbots',
    component: () => import('../views/modules/chatbots/ChatbotsOverviewView.vue'),
  },
  {
    path: '/chatbots/the-age-of-chatbots', 
    name: 'the-age-of-chatbots',
    component: () => import('../views/modules/chatbots/ChatbotsPageOneView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
