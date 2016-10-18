import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App.vue'
import Home from './views/Home.vue'
import Evento from './views/Evento.vue'


const routes = [
  { path: '/', component: Home, redirect: '/proximos',
    children: [
      { path: 'passados' },
      { path: 'proximos' }
    ]
  },
  { path: '/evento/:id', component: Evento },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  routes // short for routes: routes
})

const app = new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')

