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
    <!-- VitePress content iframe with full height -->
    <div class="w-full" style="height: calc(100vh - 80px);">
      <iframe 
        ref="vitepress"
        class="w-full h-full border-0"
        title="Learn Documentation"
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
/* Ensure iframe takes full space */
iframe {
  min-height: 600px;
}
</style>