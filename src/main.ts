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
import CustomDevelopment from './pages/CustomDevelopment.vue'
import Software from './pages/Software.vue'
import Download from './pages/Download.vue'
import ApiReference from './pages/ApiReference.vue'
import AeROS from './pages/AeROS.vue'
import WeibullToolbox from './pages/WeibullToolbox.vue'
import Services from './pages/Services.vue'
import Learn from './pages/Learn.vue'

// Import markdown docs
import IntroDoc from '../docs/intro.md'
import AeROSDoc from '../docs/aeros.md'
import WeibullDoc from '../docs/weibull.md'

// Import doc layout
import DocLayout from './components/DocLayout.vue'

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
    { path: '/custom-development', component: CustomDevelopment },
    { path: '/software', component: Software },
    { path: '/download', component: Download },
    { path: '/api-reference', component: ApiReference },
    { path: '/aeros', component: AeROS },
    { path: '/weibull-toolbox', component: WeibullToolbox },
    { path: '/services', component: Services },
    { path: '/learn', component: Learn },
    // Documentation routes
    { 
      path: '/docs/intro', 
      component: () => ({
        render() {
          return h(DocLayout, {}, {
            default: () => h(IntroDoc)
          })
        }
      })
    },
    { 
      path: '/docs/aeros', 
      component: () => ({
        render() {
          return h(DocLayout, {}, {
            default: () => h(AeROSDoc)
          })
        }
      })
    },
    { 
      path: '/docs/weibull-toolbox', 
      component: () => ({
        render() {
          return h(DocLayout, {}, {
            default: () => h(WeibullDoc)
          })
        }
      })
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Import h function for render functions
import { h } from 'vue'

const app = createApp(App)
app.use(router)
app.mount('#app')