<template>
  <div class="pt-20 min-h-screen bg-gray-50">
    <!-- Header Section -->
    <div class="bg-primary/10 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-dark mb-4">Learn</h1>
        <p class="text-xl text-gray-600 max-w-3xl">
          Comprehensive learning resources and documentation for AEROS reliability engineering platform.
        </p>
      </div>
    </div>
    
    <!-- Documentation Content -->
    <div class="container mx-auto px-4 py-16">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="p-6 border-b border-gray-200">
          <div class="flex items-center justify-between">
            <h2 class="text-2xl font-bold text-dark">Documentation</h2>
            <div class="flex gap-2">
              <a 
                href="/docs/" 
                target="_blank"
                class="bg-primary hover:bg-primary/90 text-white font-medium px-4 py-2 rounded-lg transition-colors text-sm"
              >
                Open Full Docs
              </a>
              <button 
                @click="refreshDocs"
                class="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-lg transition-colors text-sm"
              >
                Refresh
              </button>
            </div>
          </div>
          <p class="text-gray-600 mt-2">
            Complete documentation powered by VitePress with search, navigation, and responsive design.
          </p>
        </div>
        
        <!-- Embedded Documentation Frame -->
        <div class="relative" style="height: 800px;">
          <iframe 
            :src="docsUrl"
            class="w-full h-full border-0"
            @load="onDocsLoad"
          ></iframe>
          
          <!-- Loading overlay -->
          <div v-if="isLoading" class="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center">
            <div class="text-center">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p class="text-gray-600">Loading documentation...</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Quick Links -->
      <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-dark mb-2">Getting Started</h3>
          <p class="text-gray-600 mb-4">New to AEROS? Start with our introduction guide and installation instructions.</p>
          <a href="/docs/guide/" target="_blank" class="text-primary font-medium hover:underline">Read Guide →</a>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-dark mb-2">Product Guides</h3>
          <p class="text-gray-600 mb-4">Detailed documentation for AeROS® and Weibull Toolbox® with examples and best practices.</p>
          <a href="/docs/guide/aeros" target="_blank" class="text-primary font-medium hover:underline">View Products →</a>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-dark mb-2">API Reference</h3>
          <p class="text-gray-600 mb-4">Complete API documentation with authentication guides and code examples.</p>
          <a href="/docs/api/" target="_blank" class="text-primary font-medium hover:underline">View API Docs →</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const docsUrl = ref('/docs/')
const isLoading = ref(true)

const onDocsLoad = () => {
  isLoading.value = false
}

const refreshDocs = () => {
  isLoading.value = true
  // Force iframe reload
  const timestamp = new Date().getTime()
  docsUrl.value = `/docs/?t=${timestamp}`
}

onMounted(() => {
  // Set initial loading state
  setTimeout(() => {
    if (isLoading.value) {
      isLoading.value = false
    }
  }, 3000) // Fallback timeout
})
</script>