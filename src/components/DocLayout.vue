<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import Navbar from './Navbar.vue'
import FooterSection from './FooterSection.vue'

const tocItems = ref<Array<{ id: string; text: string; level: number }>>([])

const generateToc = () => {
  const headings = document.querySelectorAll('.markdown-content h1, .markdown-content h2, .markdown-content h3, .markdown-content h4, .markdown-content h5, .markdown-content h6')
  
  tocItems.value = Array.from(headings).map((heading) => {
    const id = heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || ''
    if (!heading.id) {
      heading.id = id
    }
    
    return {
      id,
      text: heading.textContent || '',
      level: parseInt(heading.tagName.charAt(1))
    }
  })
}

onMounted(() => {
  nextTick(() => {
    generateToc()
  })
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    
    <main class="flex-1 pt-20">
      <div class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <!-- Table of Contents -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 class="text-lg font-bold text-dark mb-4">Table of Contents</h3>
              <nav v-if="tocItems.length > 0">
                <ul class="space-y-2">
                  <li v-for="item in tocItems" :key="item.id">
                    <a 
                      :href="`#${item.id}`"
                      :class="[
                        'block text-sm hover:text-primary transition-colors',
                        item.level === 1 ? 'font-semibold text-dark' : 
                        item.level === 2 ? 'text-gray-700 pl-3' :
                        item.level === 3 ? 'text-gray-600 pl-6' :
                        'text-gray-500 pl-9'
                      ]"
                    >
                      {{ item.text }}
                    </a>
                  </li>
                </ul>
              </nav>
              <p v-else class="text-gray-500 text-sm">No headings found</p>
            </div>
          </div>
          
          <!-- Main Content -->
          <div class="lg:col-span-3">
            <div class="bg-white rounded-lg shadow-md p-8">
              <div class="markdown-content prose prose-lg max-w-none">
                <slot />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    <FooterSection />
  </div>
</template>

<style>
.markdown-content {
  @apply text-gray-800;
}

.markdown-content h1 {
  @apply text-3xl font-bold text-dark mb-6 mt-8 first:mt-0;
}

.markdown-content h2 {
  @apply text-2xl font-bold text-dark mb-4 mt-6;
}

.markdown-content h3 {
  @apply text-xl font-semibold text-dark mb-3 mt-5;
}

.markdown-content h4 {
  @apply text-lg font-semibold text-dark mb-2 mt-4;
}

.markdown-content p {
  @apply mb-4 leading-relaxed;
}

.markdown-content ul {
  @apply mb-4 pl-6;
}

.markdown-content li {
  @apply mb-2 list-disc;
}

.markdown-content code {
  @apply bg-gray-100 px-2 py-1 rounded text-sm font-mono;
}

.markdown-content pre {
  @apply bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4;
}

.markdown-content blockquote {
  @apply border-l-4 border-primary pl-4 italic text-gray-600 mb-4;
}

.markdown-content a {
  @apply text-primary hover:underline;
}

.markdown-content table {
  @apply w-full border-collapse border border-gray-300 mb-4;
}

.markdown-content th,
.markdown-content td {
  @apply border border-gray-300 px-4 py-2;
}

.markdown-content th {
  @apply bg-gray-50 font-semibold;
}
</style>