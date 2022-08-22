import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _953dc11c = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _22038b27 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _1ea62221 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _3266233e = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _f7de232a = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _acdb7496 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _64d19ca4 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

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
    component: _953dc11c,
    children: [{
      path: "",
      component: _22038b27,
      name: "home"
    }, {
      path: "/login",
      component: _1ea62221,
      name: "login"
    }, {
      path: "/register",
      component: _1ea62221,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _3266233e,
      name: "profile"
    }, {
      path: "/settings",
      component: _f7de232a,
      name: "settings"
    }, {
      path: "/editor",
      component: _acdb7496,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _64d19ca4,
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
