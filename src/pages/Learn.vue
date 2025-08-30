<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navbar -->
    <Navbar />
    
    <!-- Documentation Layout -->
    <div class="flex">
      <!-- Sidebar -->
      <div class="w-64 bg-white shadow-sm border-r border-gray-200 min-h-screen sticky top-0">
        <div class="p-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">Documentation</h2>
          
          <!-- Table of Contents -->
          <nav class="space-y-4">
            <div v-for="section in tableOfContents" :key="section.id" class="space-y-2">
              <h3 class="text-sm font-medium text-gray-700 uppercase tracking-wide">
                {{ section.title }}
              </h3>
              <ul class="space-y-1 ml-2">
                <li v-for="item in section.items" :key="item.id">
                  <button
                    @click="loadDocument(item.file)"
                    :class="[
                      'block w-full text-left px-3 py-2 text-sm rounded-md transition-colors',
                      selectedDoc === item.file
                        ? 'bg-blue-100 text-blue-700 font-medium'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    ]"
                  >
                    {{ item.title }}
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      
      <!-- Main Content -->
      <div class="flex-1">
        <div class="max-w-4xl mx-auto px-6 py-8">
          <!-- Hero Section -->
          <div v-if="!selectedDoc" class="text-center py-12">
            <h1 class="text-4xl font-bold text-gray-900 mb-4">
              AEROS Documentation
            </h1>
            <p class="text-xl text-gray-600 mb-8">
              Comprehensive guides and API reference for AEROS software suite
            </p>
            
            <!-- Quick Start Cards -->
            <div class="grid md:grid-cols-3 gap-6 mt-12">
              <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Getting Started</h3>
                <p class="text-gray-600 mb-4">Learn the basics and get up and running quickly</p>
                <button 
                  @click="loadDocument('/docs/getting-started.md')"
                  class="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read Guide →
                </button>
              </div>
              
              <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">AeROS Guide</h3>
                <p class="text-gray-600 mb-4">Complete guide to using AeROS software</p>
                <button 
                  @click="loadDocument('/docs/aeros-guide.md')"
                  class="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read Guide →
                </button>
              </div>
              
              <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">API Reference</h3>
                <p class="text-gray-600 mb-4">Detailed API documentation and examples</p>
                <button 
                  @click="loadDocument('/docs/api-guide.md')"
                  class="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Read Guide →
                </button>
              </div>
            </div>
          </div>
          
          <!-- Markdown Content -->
          <div v-if="selectedDoc" class="bg-white rounded-lg shadow-sm border border-gray-200">
            <MarkdownRenderer :file="selectedDoc" />
          </div>
        </div>
      </div>
    </div>
    
    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import FooterSection from '../components/FooterSection.vue'
import MarkdownRenderer from '../components/MarkdownRenderer.vue'

const selectedDoc = ref('')

const tableOfContents = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    items: [
      { id: 'intro', title: 'Introduction', file: '/docs/getting-started.md' },
      { id: 'installation', title: 'Installation', file: '/docs/getting-started.md' }
    ]
  },
  {
    id: 'guides',
    title: 'Guides',
    items: [
      { id: 'aeros', title: 'AeROS Guide', file: '/docs/aeros-guide.md' },
      { id: 'weibull', title: 'Weibull Toolbox', file: '/docs/weibull-guide.md' }
    ]
  },
  {
    id: 'reference',
    title: 'Reference',
    items: [
      { id: 'api', title: 'API Reference', file: '/docs/api-guide.md' }
    ]
  }
]

const loadDocument = (file) => {
  selectedDoc.value = file
}
</script>