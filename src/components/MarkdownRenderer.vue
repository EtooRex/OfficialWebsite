<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { parseMarkdown, loadMarkdownFile, type TocItem } from '../utils/markdown'

const route = useRoute()
const content = ref('')
const html = ref('')
const toc = ref<TocItem[]>([])
const isLoading = ref(true)
const error = ref('')

const docPath = computed(() => {
  const path = route.params.path as string
  return path || 'getting-started'
})

const loadContent = async () => {
  isLoading.value = true
  error.value = ''
  
  try {
    const markdownContent = await loadMarkdownFile(docPath.value)
    content.value = markdownContent
    
    const parsed = parseMarkdown(markdownContent)
    html.value = parsed.html
    toc.value = parsed.toc
  } catch (err) {
    error.value = `Failed to load documentation: ${err}`
    console.error(err)
  } finally {
    isLoading.value = false
  }
}

const scrollToHeading = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

onMounted(loadContent)
watch(() => route.params.path, loadContent)
</script>

<template>
  <div class="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
    <!-- Table of Contents Sidebar -->
    <div class="lg:w-1/4">
      <div class="bg-white rounded-lg shadow-lg p-6 sticky top-24">
        <h3 class="text-lg font-bold text-dark mb-4">Table of Contents</h3>
        
        <div v-if="isLoading" class="space-y-2">
          <div class="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div class="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
          <div class="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
        </div>
        
        <nav v-else-if="toc.length > 0" class="space-y-1">
          <a
            v-for="item in toc"
            :key="item.id"
            @click.prevent="scrollToHeading(item.id)"
            :class="[
              'block py-2 px-3 text-sm rounded-md cursor-pointer transition-colors duration-200',
              item.level === 1 ? 'font-semibold text-dark hover:bg-primary/10 hover:text-primary' : '',
              item.level === 2 ? 'ml-4 text-gray-700 hover:bg-gray-100 hover:text-primary' : '',
              item.level === 3 ? 'ml-8 text-gray-600 hover:bg-gray-100 hover:text-primary' : '',
              item.level >= 4 ? 'ml-12 text-gray-500 hover:bg-gray-100 hover:text-primary' : ''
            ]"
          >
            {{ item.text }}
          </a>
        </nav>
        
        <div v-else class="text-gray-500 text-sm">
          No headings found in this document.
        </div>
      </div>
    </div>
    
    <!-- Main Content Area -->
    <div class="lg:w-3/4">
      <div class="bg-white rounded-lg shadow-lg p-8">
        <div v-if="isLoading" class="space-y-4">
          <div class="h-8 bg-gray-200 rounded animate-pulse"></div>
          <div class="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div class="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
          <div class="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
        </div>
        
        <div v-else-if="error" class="text-center py-12">
          <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-dark mb-2">{{ error }}</h3>
          <p class="text-gray-600">Please check the documentation path and try again.</p>
        </div>
        
        <div 
          v-else 
          v-html="html" 
          class="prose prose-lg max-w-none prose-headings:text-dark prose-headings:font-bold prose-h1:text-3xl prose-h1:mb-6 prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8 prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6 prose-p:text-gray-600 prose-p:mb-4 prose-li:text-gray-600 prose-strong:text-dark prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-pre:bg-gray-800 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic prose-ul:list-disc prose-ol:list-decimal"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom styles for markdown content */
:deep(.heading-1) {
  @apply text-3xl font-bold text-dark mb-6 mt-0;
}

:deep(.heading-2) {
  @apply text-2xl font-bold text-dark mb-4 mt-8 pb-2 border-b border-gray-200;
}

:deep(.heading-3) {
  @apply text-xl font-bold text-dark mb-3 mt-6;
}

:deep(.heading-4) {
  @apply text-lg font-semibold text-dark mb-2 mt-4;
}

:deep(.heading-5) {
  @apply text-base font-semibold text-dark mb-2 mt-4;
}

:deep(.heading-6) {
  @apply text-sm font-semibold text-dark mb-2 mt-4;
}
</style>