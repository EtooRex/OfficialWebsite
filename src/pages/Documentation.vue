<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navigation -->
    <Navbar />
    
    <!-- Documentation Layout -->
    <div class="flex-1 pt-20">
      <div class="flex h-full">
        <!-- Sidebar with TOC -->
        <div class="w-64 bg-white border-r border-gray-200 fixed left-0 top-20 bottom-0 overflow-y-auto z-40">
          <div class="p-6">
            <h3 class="text-lg font-bold text-dark mb-4">Documentation</h3>
            <nav class="space-y-1">
              <div v-for="section in tableOfContents" :key="section.id" class="mb-4">
                <h4 class="text-sm font-semibold text-gray-900 mb-2">{{ section.title }}</h4>
                <ul class="space-y-1 ml-2">
                  <li v-for="item in section.items" :key="item.id">
                    <button
                      @click="loadDocument(item.file)"
                      :class="[
                        'block w-full text-left px-3 py-2 text-sm rounded-md transition-colors',
                        currentDoc === item.file 
                          ? 'bg-primary/10 text-primary font-medium' 
                          : 'text-gray-600 hover:text-primary hover:bg-gray-50'
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
        
        <!-- Main content area -->
        <div class="flex-1 ml-64">
          <div class="p-8">
            <div class="max-w-4xl mx-auto">
              <!-- Breadcrumb -->
              <nav class="flex mb-6" aria-label="Breadcrumb">
                <ol class="flex items-center space-x-2">
                  <li>
                    <router-link to="/" class="text-gray-500 hover:text-primary">Home</router-link>
                  </li>
                  <li>
                    <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                  </li>
                  <li class="text-gray-900 font-medium">Documentation</li>
                </ol>
              </nav>
              
              <!-- Documentation content iframe -->
              <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <iframe
                  :src="documentUrl"
                  class="w-full h-[calc(100vh-200px)] border-0"
                  @load="onIframeLoad"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Navbar from '../components/Navbar.vue'
import FooterSection from '../components/FooterSection.vue'

const currentDoc = ref('getting-started.md')
const documentUrl = ref('/docs/getting-started.html')

const tableOfContents = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    items: [
      { id: 'intro', title: 'Introduction', file: 'getting-started.md' },
      { id: 'installation', title: 'Installation', file: 'installation.md' },
      { id: 'quick-start', title: 'Quick Start', file: 'quick-start.md' }
    ]
  },
  {
    id: 'products',
    title: 'Products',
    items: [
      { id: 'aeros', title: 'AeROS®', file: 'aeros.md' },
      { id: 'weibull', title: 'Weibull Toolbox®', file: 'weibull-toolbox.md' }
    ]
  },
  {
    id: 'api',
    title: 'API Reference',
    items: [
      { id: 'auth', title: 'Authentication', file: 'api-auth.md' },
      { id: 'simulation-api', title: 'Simulation API', file: 'api-simulation.md' },
      { id: 'design-api', title: 'Design API', file: 'api-design.md' }
    ]
  },
  {
    id: 'guides',
    title: 'Guides',
    items: [
      { id: 'best-practices', title: 'Best Practices', file: 'best-practices.md' },
      { id: 'troubleshooting', title: 'Troubleshooting', file: 'troubleshooting.md' }
    ]
  }
]

const loadDocument = (filename: string) => {
  currentDoc.value = filename
  const htmlFile = filename.replace('.md', '.html')
  documentUrl.value = `/docs/${htmlFile}`
}

const onIframeLoad = () => {
  // Optional: Handle iframe load events
  console.log('Document loaded:', currentDoc.value)
}

onMounted(() => {
  // Load default document
  loadDocument('getting-started.md')
})
</script>