<script setup lang="ts">
const customers = [
  { name: "Acme Corp", logo: "https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" },
  { name: "Globex", logo: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" },
  { name: "Stark Industries", logo: "https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" },
  { name: "Wayne Enterprises", logo: "https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" },
  { name: "Umbrella Corp", logo: "https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" },
  { name: "Cyberdyne Systems", logo: "https://tailwindui.com/img/logos/laravel-logo-gray-400.svg" }
];
</script>

<template>
  <section class="py-10 md:py-12 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-center text-gray-500 text-base md:text-lg font-medium mb-6 md:mb-8">Trusted by industry leaders worldwide</h2>
      
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center">
        <div 
          v-for="(customer, index) in customers" 
          :key="index"
          class="flex justify-center"
        >
          <img 
            :src="customer.logo" 
            :alt="`${customer.name} logo`" 
            class="h-8 sm:h-10 md:h-12 object-contain filter grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  </section>
</template>