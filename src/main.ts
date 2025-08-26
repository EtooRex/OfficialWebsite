import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

// Import pages
import Home from './pages/Home.vue'
import Simulation from './pages/Simulation.vue'
import Design from './pages/Design.vue'
import Cloud from './pages/Cloud.vue'
import Enterprise from './pages/Enterprise.vue'
import Consulting from './pages/Consulting.vue'
import Training from './pages/Training.vue'
import Support from './pages/Support.vue'
import CustomDevelopment from './pages/CustomDevelopment.vue'
import Software from './pages/Software.vue'
import Tutorials from './pages/Tutorials.vue'
import ApiReference from './pages/ApiReference.vue'
import Examples from './pages/Examples.vue'
import Download from './pages/Download.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/simulation', component: Simulation },
    { path: '/design', component: Design },
    { path: '/cloud', component: Cloud },
    { path: '/enterprise', component: Enterprise },
    { path: '/consulting', component: Consulting },
    { path: '/training', component: Training },
    { path: '/support', component: Support },
    { path: '/custom-development', component: CustomDevelopment },
    { path: '/software', component: Software },
    { path: '/tutorials', component: Tutorials },
    { path: '/api', component: ApiReference },
    { path: '/examples', component: Examples },
    { path: '/download', component: Download },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

const app = createApp(App)
app.use(router)
app.mount('#app')