import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{
      title: 'Home',
    },
  },
  {
    path: '/about',
    name: 'about',
    meta:{
      title: 'About',
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },


  {
    path: '/tutorials',
    name: 'Tutorials',
    component: { render: h => h('router-view') },

    children: [
      {
        path: 'chapter-01',
        name: 'tutorials.chapter-01',
        meta:{
          title: 'Chapter 01',
        },
        component: () => import('../views/tutorials/machine-learning/chapter-01.vue'),
      },
      {
        path: 'chapter-02',
        name: 'tutorials.chapter-02',
        meta:{
          title: 'Chapter 02',
        },
        component: () => import('../views/tutorials/machine-learning/chapter-02.vue'),
      },

    ]

  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((toRoute, fromRoute, next) => {
  let title = (toRoute.meta && toRoute.meta.title) ? toRoute.meta.title : 'Home'
  window.document.title = title + ' | AI Tutorials'
  // window.document.title = 'AI Tutorials'

  next()
})

export default router
