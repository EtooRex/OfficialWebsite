<script setup lang="ts">
import { onMounted, ref } from 'vue'

const vitepress = ref<HTMLIFrameElement | null>(null)

onMounted(() => {
  // Initialize VitePress iframe
  if (vitepress.value) {
    vitepress.value.src = '/learn/'
  }
})
</script>

<template>
  <div class="pt-20 min-h-screen bg-gray-50">
    <!-- Header section matching site design -->
    <div class="bg-primary/10 py-8">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-dark mb-4">Learn</h1>
        <p class="text-xl text-gray-600 max-w-3xl">
          Comprehensive learning resources to help you master reliability engineering and our software tools.
        </p>
      </div>
    </div>
    
    <!-- VitePress content iframe -->
    <div class="container mx-auto px-4 py-8">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden" style="height: calc(100vh - 200px);">
        <iframe 
          ref="vitepress"
          class="w-full h-full border-0"
          title="Learn Documentation"
          loading="lazy"
        ></iframe>
      </div>
    </div>
    
    <!-- Fallback content for when VitePress is not available -->
    <div class="container mx-auto px-4 pb-16">
      <noscript>
        <div class="bg-white p-8 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold text-dark mb-4">Documentation Access</h2>
          <p class="text-gray-600 mb-4">
            For the best learning experience, please enable JavaScript to access our interactive documentation.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="border border-gray-200 p-6 rounded-lg">
              <h3 class="text-lg font-semibold text-dark mb-2">Documentation</h3>
              <p class="text-gray-600 mb-3">Comprehensive guides for AeROS® and Weibull Toolbox®</p>
              <a href="/learn/documentation/" class="text-primary font-medium hover:underline">Read docs →</a>
            </div>
            <div class="border border-gray-200 p-6 rounded-lg">
              <h3 class="text-lg font-semibold text-dark mb-2">Tutorials</h3>
              <p class="text-gray-600 mb-3">Step-by-step video guides and walkthroughs</p>
              <a href="/learn/tutorials/" class="text-primary font-medium hover:underline">Watch videos →</a>
            </div>
            <div class="border border-gray-200 p-6 rounded-lg">
              <h3 class="text-lg font-semibold text-dark mb-2">API Reference</h3>
              <p class="text-gray-600 mb-3">Complete API documentation for developers</p>
              <a href="/learn/api/" class="text-primary font-medium hover:underline">View API docs →</a>
            </div>
          </div>
        </div>
      </noscript>
    </div>
  </div>
</template>

<style scoped>
/* Ensure iframe takes full space */
iframe {
  min-height: 600px;
}

/* Custom scrollbar for iframe content */
iframe::-webkit-scrollbar {
  width: 8px;
}

iframe::-webkit-scrollbar-track {
  background: #f1f1f1;
}

iframe::-webkit-scrollbar-thumb {
  background: #fc037b;
  border-radius: 4px;
}

iframe::-webkit-scrollbar-thumb:hover {
  background: rgba(252, 3, 123, 0.8);
}
</style>
