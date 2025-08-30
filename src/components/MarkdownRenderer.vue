<template>
  <div class="markdown-content" v-html="renderedContent"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

const props = defineProps<{
  src: string
}>()

const renderedContent = ref('')

// Configure marked with syntax highlighting
marked.setOptions({
  highlight: function(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(code, { language: lang }).value
      } catch (err) {
        console.error('Highlight.js error:', err)
      }
    }
    return hljs.highlightAuto(code).value
  },
  breaks: true,
  gfm: true
})

const loadMarkdown = async () => {
  try {
    const response = await fetch(props.src)
    if (!response.ok) {
      throw new Error(`Failed to load: ${response.statusText}`)
    }
    const markdown = await response.text()
    renderedContent.value = marked(markdown)
  } catch (error) {
    console.error('Error loading markdown:', error)
    renderedContent.value = `<div class="text-red-600 p-4 bg-red-50 rounded-lg">
      <h3 class="font-bold mb-2">Error loading documentation</h3>
      <p>Could not load: ${props.src}</p>
    </div>`
  }
}

onMounted(() => {
  loadMarkdown()
})

watch(() => props.src, () => {
  loadMarkdown()
})
</script>

<style scoped>
.markdown-content {
  @apply prose prose-lg max-w-none;
}

.markdown-content :deep(h1) {
  @apply text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200;
}

.markdown-content :deep(h2) {
  @apply text-2xl font-bold text-gray-900 mb-4 mt-8;
}

.markdown-content :deep(h3) {
  @apply text-xl font-semibold text-gray-900 mb-3 mt-6;
}

.markdown-content :deep(p) {
  @apply text-gray-600 mb-4 leading-relaxed;
}

.markdown-content :deep(ul) {
  @apply mb-4 space-y-2;
}

.markdown-content :deep(li) {
  @apply text-gray-600;
}

.markdown-content :deep(strong) {
  @apply font-semibold text-gray-900;
}

.markdown-content :deep(code) {
  @apply bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800;
}

.markdown-content :deep(pre) {
  @apply bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4;
}

.markdown-content :deep(pre code) {
  @apply bg-transparent p-0 text-gray-100;
}

.markdown-content :deep(a) {
  @apply text-primary hover:underline;
}

.markdown-content :deep(blockquote) {
  @apply border-l-4 border-primary pl-4 italic text-gray-600 my-4;
}
</style>