<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isDocsLoaded = ref(false)

onMounted(() => {
  // Simulate docs loading
  setTimeout(() => {
    isDocsLoaded.value = true
  }, 500)
})
</script>

<template>
  <div class="pt-20 min-h-screen bg-gray-50">
    <!-- Header Section -->
    <div class="bg-primary/10 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-dark mb-4">Learn</h1>
        <p class="text-xl text-gray-600 max-w-3xl">
          Comprehensive learning resources for reliability engineering and asset management.
        </p>
      </div>
    </div>
    
    <!-- VitePress Integration Notice -->
    <div class="container mx-auto px-4 py-8">
      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl font-bold text-dark mb-2">Documentation System</h2>
            <p class="text-gray-600">
              Our comprehensive documentation is powered by VitePress. Start the documentation server to access all learning materials.
            </p>
          </div>
          <div class="flex gap-4">
            <button 
              class="bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-lg transition-colors"
              onclick="window.open('/docs/', '_blank')"
            >
              Open Documentation
            </button>
            <button 
              class="bg-gray-100 hover:bg-gray-200 text-dark font-bold px-6 py-3 rounded-lg transition-colors"
              onclick="navigator.clipboard.writeText('npm run docs:dev')"
            >
              Copy Dev Command
            </button>
          </div>
        </div>
      </div>
      
      <!-- Quick Access Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div class="h-2 bg-primary"></div>
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span class="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">Documentation</span>
            </div>
            <h3 class="text-xl font-bold text-dark mb-2">AeROS® Documentation</h3>
            <p class="text-gray-600 mb-4">
              Comprehensive guides for Asset Reliability and Operations Simulation covering everything from basic concepts to advanced techniques.
            </p>
            <button 
              class="text-primary font-medium hover:underline"
              onclick="window.open('/docs/documentation/aeros/', '_blank')"
            >
              Read documentation →
            </button>
          </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div class="h-2 bg-primary"></div>
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span class="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">Documentation</span>
            </div>
            <h3 class="text-xl font-bold text-dark mb-2">Weibull Toolbox® Documentation</h3>
            <p class="text-gray-600 mb-4">
              Learn about advanced statistical analysis capabilities including distribution fitting and life data analysis.
            </p>
            <button 
              class="text-primary font-medium hover:underline"
              onclick="window.open('/docs/documentation/weibull/', '_blank')"
            >
              Read documentation →
            </button>
          </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div class="h-2 bg-primary"></div>
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <span class="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">Guide</span>
            </div>
            <h3 class="text-xl font-bold text-dark mb-2">Data Classification Guide</h3>
            <p class="text-gray-600 mb-4">
              Understanding different types of reliability data and their characteristics for proper analysis.
            </p>
            <button 
              class="text-primary font-medium hover:underline"
              onclick="window.open('/docs/documentation/data-classification', '_blank')"
            >
              Read guide →
            </button>
          </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div class="h-2 bg-primary"></div>
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <span class="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">Video Tutorials</span>
            </div>
            <h3 class="text-xl font-bold text-dark mb-2">Video Tutorials</h3>
            <p class="text-gray-600 mb-4">
              Step-by-step video guides and walkthroughs to help you master reliability analysis techniques.
            </p>
            <button 
              class="text-primary font-medium hover:underline"
              onclick="window.open('/docs/tutorials/', '_blank')"
            >
              Watch tutorials →
            </button>
          </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div class="h-2 bg-primary"></div>
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span class="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">API</span>
            </div>
            <h3 class="text-xl font-bold text-dark mb-2">API Reference</h3>
            <p class="text-gray-600 mb-4">
              Complete API documentation for developers looking to integrate our reliability analysis capabilities.
            </p>
            <button 
              class="text-primary font-medium hover:underline"
              onclick="window.open('/docs/api/', '_blank')"
            >
              View API docs →
            </button>
          </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          <div class="h-2 bg-primary"></div>
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span class="bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">Best Practices</span>
            </div>
            <h3 class="text-xl font-bold text-dark mb-2">Best Practices</h3>
            <p class="text-gray-600 mb-4">
              Industry best practices for reliability engineering, maintenance optimization, and asset management.
            </p>
            <button 
              class="text-primary font-medium hover:underline"
              onclick="window.open('/docs/documentation/', '_blank')"
            >
              Learn more →
            </button>
          </div>
        </div>
      </div>
      
      <!-- Getting Started Section -->
      <div class="bg-white p-8 rounded-lg shadow-xl mb-16">
        <h3 class="text-2xl font-bold text-dark mb-6 text-center">Getting Started with Documentation</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="flex items-start">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <span class="text-xl font-bold text-primary">1</span>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-dark mb-2">Start Documentation Server</h4>
              <p class="text-gray-600 mb-3">Run the documentation development server to access all content:</p>
              <code class="bg-gray-100 px-3 py-1 rounded text-sm">npm run docs:dev</code>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <span class="text-xl font-bold text-primary">2</span>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-dark mb-2">Access Documentation</h4>
              <p class="text-gray-600 mb-3">Open your browser and navigate to the documentation:</p>
              <code class="bg-gray-100 px-3 py-1 rounded text-sm">http://localhost:5173/docs/</code>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <span class="text-xl font-bold text-primary">3</span>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-dark mb-2">Edit Content</h4>
              <p class="text-gray-600 mb-3">All documentation is in markdown format in the docs/ folder:</p>
              <code class="bg-gray-100 px-3 py-1 rounded text-sm">docs/**/*.md</code>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <span class="text-xl font-bold text-primary">4</span>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-dark mb-2">Build for Production</h4>
              <p class="text-gray-600 mb-3">Build the documentation for production deployment:</p>
              <code class="bg-gray-100 px-3 py-1 rounded text-sm">npm run docs:build</code>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Learning Paths -->
      <div class="bg-white p-8 rounded-lg shadow-xl">
        <h3 class="text-2xl font-bold text-dark mb-6 text-center">Popular Learning Paths</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="flex items-start">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-dark mb-2">Getting Started with AeROS®</h4>
              <p class="text-gray-600">Learn the fundamentals of reliability block diagram modeling and asset reliability simulation.</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-dark mb-2">Weibull Analysis Basics</h4>
              <p class="text-gray-600">Master statistical analysis for reliability data using the Weibull distribution and other methods.</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-dark mb-2">Data Classification Guide</h4>
              <p class="text-gray-600">Understanding different types of reliability data and their characteristics for proper analysis.</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
              <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-dark mb-2">Advanced Techniques</h4>
              <p class="text-gray-600">Explore advanced reliability engineering techniques and best practices for complex systems.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Call to Action -->
    <div class="container mx-auto px-4 pb-16">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-dark mb-8">Ready to start learning?</h2>
        <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join our community of reliability engineers and start mastering the tools and techniques you need to succeed.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            class="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg transition-colors"
            onclick="window.open('/docs/', '_blank')"
          >
            Open Documentation
          </button>
          <button 
            class="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 font-bold px-8 py-4 rounded-lg transition-colors"
            onclick="navigator.clipboard.writeText('npm run docs:dev')"
          >
            Copy Dev Command
          </button>
        </div>
      </div>
    </div>
  </div>
</template>