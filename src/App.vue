<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <router-view></router-view>
    <FooterSection />
  </div>
</template>

<style>
/* Any global styles can go here */
</style>