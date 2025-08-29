<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isDocsReady = ref(false)

onMounted(() => {
  // Check if docs are available
  setTimeout(() => {
    isDocsReady.value = true
  }, 1000)
})

const openDocs = () => {
  window.open('/docs/', '_blank')
}

const copyCommand = (command: string) => {
  navigator.clipboard.writeText(command)
}
</script>

<template>
  <div class="pt-20 min-h-screen bg-gray-50">
    <!-- Header Section -->
    <div class="bg-primary/10 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-dark mb-4">Learn</h1>
        <p class="text-xl text-gray-600 max-w-3xl">
          Comprehensive learning resources for reliability engineering and asset management powered by VitePress.
        </p>
      </div>
    </div>
    
    <!-- VitePress Documentation Access -->
    <div class="container mx-auto px-4 py-8">
      <div class="bg-white rounded-lg shadow-xl p-8 mb-16">
        <div class="text-center mb-8">
          <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-dark mb-4">VitePress Documentation</h2>
          <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our comprehensive documentation is built with VitePress, featuring automatic table of contents, search functionality, and a clean, professional interface.
          </p>
          
          <div class="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button 
              @click="openDocs"
              class="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg transition-colors flex items-center justify-center"
            >
              <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open Documentation
            </button>
            <button 
              @click="copyCommand('npm run docs:dev')"
              class="bg-gray-100 hover:bg-gray-200 text-dark font-bold px-8 py-4 rounded-lg transition-colors flex items-center justify-center"
            >
              <svg class="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy Dev Command
            </button>
          </div>
        </div>
        
        <!-- Documentation Features -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div class="text-center">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-dark mb-2">Auto Table of Contents</h3>
            <p class="text-gray-600">VitePress automatically generates a table of contents from your markdown headings</p>
          </div>
          
          <div class="text-center">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-dark mb-2">Built-in Search</h3>
            <p class="text-gray-600">Powerful search functionality to quickly find the information you need</p>
          </div>
          
          <div class="text-center">
            <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-dark mb-2">Code Highlighting</h3>
            <p class="text-gray-600">Syntax highlighting for code examples and API documentation</p>
          </div>
        </div>
        
        <!-- Quick Start Guide -->
        <div class="bg-gray-50 rounded-lg p-6">
          <h3 class="text-xl font-bold text-dark mb-4">Quick Start Guide</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 class="text-lg font-semibold text-dark mb-2">1. Access Documentation</h4>
              <p class="text-gray-600 mb-3">The documentation server is already running. Click "Open Documentation" to access the full guide.</p>
              <code class="bg-white px-3 py-1 rounded text-sm">http://localhost:5173/docs/</code>
            </div>
            
            <div>
              <h4 class="text-lg font-semibold text-dark mb-2">2. Edit Content</h4>
              <p class="text-gray-600 mb-3">All documentation is in markdown format. Edit the main file:</p>
              <code class="bg-white px-3 py-1 rounded text-sm">docs/documentation.md</code>
            </div>
            
            <div>
              <h4 class="text-lg font-semibold text-dark mb-2">3. Auto Table of Contents</h4>
              <p class="text-gray-600 mb-3">VitePress automatically generates TOC from your headings (##, ###, ####)</p>
              <code class="bg-white px-3 py-1 rounded text-sm">outline: [2, 3, 4]</code>
            </div>
            
            <div>
              <h4 class="text-lg font-semibold text-dark mb-2">4. Build for Production</h4>
              <p class="text-gray-600 mb-3">Build the documentation for deployment:</p>
              <code class="bg-white px-3 py-1 rounded text-sm">npm run docs:build</code>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Content Overview -->
      <div class="bg-white p-8 rounded-lg shadow-xl">
        <h3 class="text-2xl font-bold text-dark mb-6 text-center">Documentation Content</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="border border-gray-200 rounded-lg p-6">
            <h4 class="text-lg font-semibold text-dark mb-2">Data Classification</h4>
            <p class="text-gray-600 mb-3">Understanding reliability data types and characteristics</p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• Complete Data</li>
              <li>• Censored Data</li>
              <li>• Grouped Data</li>
            </ul>
          </div>
          
          <div class="border border-gray-200 rounded-lg p-6">
            <h4 class="text-lg font-semibold text-dark mb-2">AeROS® Guide</h4>
            <p class="text-gray-600 mb-3">Asset Reliability and Operations Simulation</p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• Advanced Modeling</li>
              <li>• Monte Carlo Simulation</li>
              <li>• Maintenance Optimization</li>
            </ul>
          </div>
          
          <div class="border border-gray-200 rounded-lg p-6">
            <h4 class="text-lg font-semibold text-dark mb-2">Weibull Toolbox®</h4>
            <p class="text-gray-600 mb-3">Statistical analysis for reliability engineering</p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• Distribution Analysis</li>
              <li>• Parameter Estimation</li>
              <li>• Reliability Prediction</li>
            </ul>
          </div>
          
          <div class="border border-gray-200 rounded-lg p-6">
            <h4 class="text-lg font-semibold text-dark mb-2">Best Practices</h4>
            <p class="text-gray-600 mb-3">Industry guidelines and recommendations</p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• Data Collection</li>
              <li>• Analysis Approach</li>
              <li>• Common Pitfalls</li>
            </ul>
          </div>
          
          <div class="border border-gray-200 rounded-lg p-6">
            <h4 class="text-lg font-semibold text-dark mb-2">API Reference</h4>
            <p class="text-gray-600 mb-3">Complete API documentation with examples</p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• Authentication</li>
              <li>• Endpoints</li>
              <li>• Code Examples</li>
            </ul>
          </div>
          
          <div class="border border-gray-200 rounded-lg p-6">
            <h4 class="text-lg font-semibold text-dark mb-2">Tutorials</h4>
            <p class="text-gray-600 mb-3">Step-by-step learning guides</p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• Getting Started</li>
              <li>• Advanced Techniques</li>
              <li>• Real-world Examples</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
</template>