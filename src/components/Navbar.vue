<template>
  <nav :class="[
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    isScrolled || !isHomePage ? 'bg-white shadow-lg' : 'bg-transparent'
  ]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="flex items-center">
            <span :class="[
              'text-2xl font-bold',
              isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'
            ]">
              AEROS
            </span>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <router-link
              v-for="item in navItems"
              :key="item.name"
              :to="item.href"
              :class="[
                'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                isScrolled || !isHomePage 
                  ? 'text-gray-700 hover:text-pink-600 hover:bg-gray-100' 
                  : 'text-white hover:text-pink-200 hover:bg-white/10'
              ]"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            :class="[
              'inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200',
              isScrolled || !isHomePage 
                ? 'text-gray-700 hover:text-pink-600 hover:bg-gray-100' 
                : 'text-white hover:text-pink-200 hover:bg-white/10'
            ]"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white shadow-lg">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link
          v-for="item in navItems"
          :key="item.name"
          :to="item.href"
          @click="mobileMenuOpen = false"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-gray-100 transition-colors duration-200"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const isHomePage = computed(() => route.path === '/')

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Software', href: '/software' },
  { name: 'Examples', href: '/examples' },
  { name: 'Tutorials', href: '/tutorials' },
  { name: 'API Reference', href: '/api' },
  { name: 'Support', href: '/support' },
  { name: 'Download', href: '/download' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>