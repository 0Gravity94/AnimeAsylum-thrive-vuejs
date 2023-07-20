import './assets/main.css'

import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import Home from './routes/home.vue'
import Detail from './routes/detail.vue'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/:animeId',
      component: Detail
    }
  ]
})

const app = createApp(App)

app.use(router)

app.mount('#app')

// createApp(App).mount('#app')
