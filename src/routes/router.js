import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

import {auth} from '../firebase'

Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active',
  scrollBehavior: (to, from ,savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to,from,next)=>{
  const requireAuth = to.matched.some(x=>x.meta.requireAuth)

  if (requireAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router;
