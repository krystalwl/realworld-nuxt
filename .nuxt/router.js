import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _93a9c9b8 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _441ccb59 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _3fb4e82f = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _017b2e22 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _7a4ac59d = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _ab477d32 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _33e6a788 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _93a9c9b8,
    children: [{
      path: "",
      component: _441ccb59,
      name: "home"
    }, {
      path: "/login",
      component: _3fb4e82f,
      name: "login"
    }, {
      path: "/register",
      component: _3fb4e82f,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _017b2e22,
      name: "profile"
    }, {
      path: "/settings",
      component: _7a4ac59d,
      name: "settings"
    }, {
      path: "/editor",
      component: _ab477d32,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _33e6a788,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
