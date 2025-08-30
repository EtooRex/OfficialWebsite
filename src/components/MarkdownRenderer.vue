<template>
  <div class="markdown-content prose prose-lg max-w-none" v-html="renderedContent"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { marked } from 'marked'
import hljs from 'highlight.js'

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
    renderedContent.value = `
      <div class="text-red-600 p-4 bg-red-50 rounded-lg">
        <h3 class="font-bold mb-2">Error loading documentation</h3>
        <p>Could not load: ${props.src}</p>
        <p class="text-sm mt-2">Error: ${error}</p>
      </div>
    `
  }
}

onMounted(() => {
  loadMarkdown()
})

watch(() => props.src, () => {
  loadMarkdown()
})
</script>

<style>
/* Import highlight.js theme */
@import 'highlight.js/styles/github.css';

/* Custom prose styling */
.markdown-content {
  color: #374151;
  line-height: 1.7;
}

.markdown-content h1 {
  @apply text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200;
}

.markdown-content h2 {
  @apply text-2xl font-bold text-gray-900 mb-4 mt-8;
}

.markdown-content h3 {
  @apply text-xl font-semibold text-gray-900 mb-3 mt-6;
}

.markdown-content p {
  @apply text-gray-600 mb-4 leading-relaxed;
}

.markdown-content ul {
  @apply mb-4 space-y-2 list-disc list-inside;
}

.markdown-content ol {
  @apply mb-4 space-y-2 list-decimal list-inside;
}

.markdown-content li {
  @apply text-gray-600;
}

.markdown-content strong {
  @apply font-semibold text-gray-900;
}

.markdown-content code {
  @apply bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800;
}

.markdown-content pre {
  @apply bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4;
}

.markdown-content pre code {
  @apply bg-transparent p-0 text-gray-100;
}

.markdown-content a {
  @apply text-pink-600 hover:underline;
}

.markdown-content blockquote {
  @apply border-l-4 border-pink-600 pl-4 italic text-gray-600 my-4;
}

.markdown-content table {
  @apply w-full border-collapse border border-gray-300 mb-4;
}

.markdown-content th {
  @apply bg-gray-50 border border-gray-300 px-4 py-2 font-semibold text-left;
}

.markdown-content td {
  @apply border border-gray-300 px-4 py-2;
}
</style>