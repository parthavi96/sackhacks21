import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';
import {auth} from '../firebase'

import NotFound from '@/views/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    redirect: 'dashboard',
    component: DashboardLayout,
    meta:{
      requireAuth:true
    },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/Dashboard.vue')
      },
      {
        path: '/crime',
        name: 'crime',
        component: () => import(/* webpackChunkName: "demo" */ '../views/crime.vue')
      },
      {
        path: '/food',
        name: 'food',
        component: () => import(/* webpackChunkName: "demo" */ '../views/food.vue')
      },
      {
        path: '/update',
        name: 'update',
        component: () => import(/* webpackChunkName: "demo" */ '../views/update.vue')
      },
      {
        path: '/alert',
        name: 'alert',
        component: () => import(/* webpackChunkName: "demo" */ '../views/alert.vue')
      },
      {
        path: '/routeBus',
        name: 'routeBus',
        component: () => import(/* webpackChunkName: "demo" */ '../views/routeBus.vue')
      },
      {
        path: '/predict',
        name: 'predict',
        component: () => import(/* webpackChunkName: "demo" */ '../views/predict.vue')
      },
      {
        path: '/icons',
        name: 'icons',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Icons.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/UserProfile.vue')
      },
      {
        path: '/maps',
        name: 'maps',
        component: () => import(/* webpackChunkName: "demo" */ '../views/GoogleMaps.vue')
      },
      {
        path: '/tables',
        name: 'tables',
        component: () => import(/* webpackChunkName: "demo" */ '../views/RegularTables.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Register.vue')
      },
      {
        path: '/logout',
        name: 'logout',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Logout.vue')
      },
      { path: '*', component: NotFound }
    ]
  }
];

export default routes;
