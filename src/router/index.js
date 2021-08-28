import Vue from 'vue'
import VueRouter from 'vue-router'
import firebaseAuth from '../middleware/firebase'

import routes from './routes'

Vue.use(VueRouter)


export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({x: 0, y: 0}),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  // Router.beforeEach(async (to, from, next) => {
  //   //Router guard without Admin's
  //   let user = localStorage.getItem('user')
  //   user === 'false' ? user = JSON.parse (user) : null;
  //
  //   if (!user && to.path !== '/signIn')
  //     await next('/signIn');
  //   else if (user && to.path === '/signIn')
  //     await next('/')
  //   else await next();
  // })
  return Router
}
