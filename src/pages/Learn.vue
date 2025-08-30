<script setup lang="ts">
import { ref } from 'vue'
import MarkdownRenderer from '../components/MarkdownRenderer.vue'

const currentDoc = ref('/docs/test.md')

const tableOfContents = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    items: [
      { id: 'intro', title: 'Introductiontest', file: '/docs/getting-started.md' },
      { id: 'installation', title: 'Installation', file: '/docs/getting-started.md' },
      { id: 'quick-start', title: 'Quick Start', file: '/docs/getting-started.md' }
    ]
  },
  {
    id: 'products',
    title: 'Products',
    items: [
      { id: 'aeros', title: 'AeROS®', file: '/docs/aeros-guide.md' },
      { id: 'weibull', title: 'Weibull Toolbox®', file: '/docs/weibull-guide.md' }
    ]
  },
  {
    id: 'api',
    title: 'API Reference',
    items: [
      { id: 'api-guide', title: 'API Guide', file: '/docs/api-guide.md' },
      { id: 'authentication', title: 'Authentication', file: '/docs/api-guide.md' },
      { id: 'endpoints', title: 'Endpoints', file: '/docs/api-guide.md' }
    ]
  }
]

const loadDocument = (filename: string) => {
  currentDoc.value = filename
}
</script>

<template>
  <div class="pt-20">
    <!-- Hero Section -->
    <div class="bg-primary/10 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-dark mb-4">AEROS Documentation</h1>
        <p class="text-xl text-gray-600 max-w-3xl">
          Comprehensive documentation for AEROS reliability engineering platform.
        </p>
      </div>
    </div>
    
    <!-- Documentation Layout -->
    <div class="container mx-auto px-4 py-8">
      <div class="flex gap-8">
        <!-- Sidebar with Table of Contents -->
        <div class="w-64 flex-shrink-0">
          <div class="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h3 class="text-lg font-bold text-dark mb-4">Table of Contents</h3>
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
        
        <!-- Main Content Area -->
        <div class="flex-1">
          <div class="bg-white rounded-lg shadow-md p-8">
            <MarkdownRenderer :src="currentDoc" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>