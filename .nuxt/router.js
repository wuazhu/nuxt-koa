import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _625c74d5 = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _0e1cf812 = () => interopDefault(import('../pages/auth.vue' /* webpackChunkName: "pages/auth" */))
const _e41e5138 = () => interopDefault(import('../pages/crm.vue' /* webpackChunkName: "pages/crm" */))
const _05306f4e = () => interopDefault(import('../pages/logined.vue' /* webpackChunkName: "pages/logined" */))
const _0b7d3798 = () => interopDefault(import('../pages/routes.vue' /* webpackChunkName: "pages/routes" */))
const _4736f3b7 = () => interopDefault(import('../pages/routes/index.vue' /* webpackChunkName: "pages/routes/index" */))
const _e3f4a8a0 = () => interopDefault(import('../pages/routes/_routeId.vue' /* webpackChunkName: "pages/routes/_routeId" */))
const _3dd5e71d = () => interopDefault(import('../pages/subs.vue' /* webpackChunkName: "pages/subs" */))
const _c9243840 = () => interopDefault(import('../pages/subs/index.vue' /* webpackChunkName: "pages/subs/index" */))
const _c2d5cc76 = () => interopDefault(import('../pages/subs/others.vue' /* webpackChunkName: "pages/subs/others" */))
const _4e22af97 = () => interopDefault(import('../pages/subs/others/a.vue' /* webpackChunkName: "pages/subs/others/a" */))
const _4e30c718 = () => interopDefault(import('../pages/subs/others/b.vue' /* webpackChunkName: "pages/subs/others/b" */))
const _30ed20d8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

const scrollBehavior = (to, from, savedPosition) => {
      return { x: 0, y: 0 }
    }

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/admin",
      component: _625c74d5,
      name: "admin"
    }, {
      path: "/auth",
      component: _0e1cf812,
      name: "auth"
    }, {
      path: "/crm",
      component: _e41e5138,
      name: "crm"
    }, {
      path: "/logined",
      component: _05306f4e,
      name: "logined"
    }, {
      path: "/routes",
      component: _0b7d3798,
      children: [{
        path: "",
        component: _4736f3b7,
        name: "routes"
      }, {
        path: ":routeId",
        component: _e3f4a8a0,
        name: "routes-routeId"
      }]
    }, {
      path: "/subs",
      component: _3dd5e71d,
      children: [{
        path: "",
        component: _c9243840,
        name: "subs"
      }, {
        path: "others",
        component: _c2d5cc76,
        name: "subs-others",
        children: [{
          path: "a",
          component: _4e22af97,
          name: "subs-others-a"
        }, {
          path: "b",
          component: _4e30c718,
          name: "subs-others-b"
        }]
      }]
    }, {
      path: "/",
      component: _30ed20d8,
      name: "index"
    }],

    fallback: false
  })
}
