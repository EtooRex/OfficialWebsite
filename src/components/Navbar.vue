<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const activeDropdown = ref<string | null>(null);
const route = useRoute();

// Check if current route is home page
const isHomePage = computed(() => route.path === '/');
const checkScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
  checkScroll();
  
  // Close dropdown when clicking outside
  window.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown-trigger') && !e.target.closest('.dropdown-menu')) {
      activeDropdown.value = null;
    }
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  // Close any open dropdowns when toggling mobile menu
  activeDropdown.value = null;
};

const toggleDropdown = (dropdown: string) => {
  if (activeDropdown.value === dropdown) {
    activeDropdown.value = null;
  } else {
    activeDropdown.value = dropdown;
  }
};

// Close mobile menu when a route is selected
const closeMenu = () => {
  isMobileMenuOpen.value = false;
  activeDropdown.value = null;
};
</script>

<template>
  <nav 
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="[
      (isScrolled || !isHomePage) ? 'bg-white shadow-md text-dark' : 'bg-transparent text-white'
    ]"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <router-link to="/" @click="closeMenu" class="text-2xl font-bold">
            AEROS
          </router-link>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-center space-x-8">
            <!-- Software Dropdown -->
            <div class="relative">
              <button 
                @click.stop="toggleDropdown('software')" 
                class="dropdown-trigger font-medium hover:text-primary transition-colors flex items-center"
                :class="activeDropdown === 'software' ? 'text-primary' : ''"
              >
                Software
                <svg 
                  class="ml-1 w-4 h-4 transition-transform" 
                  :class="activeDropdown === 'software' ? 'rotate-180' : ''"
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
              <div 
                v-if="activeDropdown === 'software'" 
                class="dropdown-menu absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
              >
                <div class="py-1">
                  <router-link @click="closeMenu" to="/simulation" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AEROS Simulation</router-link>
                  <router-link @click="closeMenu" to="/design" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AEROS Design</router-link>
                  <router-link @click="closeMenu" to="/cloud" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AEROS Cloud</router-link>
                  <router-link @click="closeMenu" to="/enterprise" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AEROS Enterprise</router-link>
                </div>
              </div>
            </div>
            
            <!-- Services Dropdown -->
            <div class="relative">
              <button 
                @click.stop="toggleDropdown('services')" 
                class="dropdown-trigger font-medium hover:text-primary transition-colors flex items-center"
                :class="activeDropdown === 'services' ? 'text-primary' : ''"
              >
                Services
                <svg 
                  class="ml-1 w-4 h-4 transition-transform" 
                  :class="activeDropdown === 'services' ? 'rotate-180' : ''"
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
              <div 
                v-if="activeDropdown === 'services'" 
                class="dropdown-menu absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
              >
                <div class="py-1">
                  <router-link @click="closeMenu" to="/consulting" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Consulting</router-link>
                  <router-link @click="closeMenu" to="/training" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Training</router-link>
                  <router-link @click="closeMenu" to="/support" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Support</router-link>
                  <router-link @click="closeMenu" to="/custom-development" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Custom Development</router-link>
                </div>
              </div>
            </div>
            
            <!-- Docs Dropdown -->
            <div class="relative">
              <button 
                @click.stop="toggleDropdown('docs')" 
                class="dropdown-trigger font-medium hover:text-primary transition-colors flex items-center"
                :class="activeDropdown === 'docs' ? 'text-primary' : ''"
              >
                Docs
                <svg 
                  class="ml-1 w-4 h-4 transition-transform" 
                  :class="activeDropdown === 'docs' ? 'rotate-180' : ''"
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
              <div 
                v-if="activeDropdown === 'docs'" 
                class="dropdown-menu absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
              >
                <div class="py-1">
                  <router-link @click="closeMenu" to="/documentation" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Documentation</router-link>
                  <router-link @click="closeMenu" to="/tutorials" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tutorials</router-link>
                  <router-link @click="closeMenu" to="/api" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">API Reference</router-link>
                  <router-link @click="closeMenu" to="/examples" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Examples</router-link>
                </div>
              </div>
            </div>
            
            <router-link to="/download" class="font-medium hover:text-primary transition-colors">Download</router-link>
            <button 
              class="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition-colors"
            >
              Sign In
            </button>
          </div>
        </div>
        
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="toggleMobileMenu"
            class="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            :class="(isScrolled || !isHomePage) ? 'text-dark' : 'text-white hover:bg-white/10'"
          >
            <svg 
              class="h-6 w-6" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                v-if="!isMobileMenuOpen" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path 
                v-else 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile menu -->
    <div 
      v-if="isMobileMenuOpen" 
      class="md:hidden bg-white text-dark shadow-lg"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <!-- Mobile Software Dropdown -->
        <div>
          <button 
            @click="toggleDropdown('mobile-software')"
            class="w-full text-left flex justify-between items-center px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
            :class="activeDropdown === 'mobile-software' ? 'bg-gray-100' : ''"
          >
            <span>Software</span>
            <svg 
              class="w-4 h-4 transition-transform" 
              :class="activeDropdown === 'mobile-software' ? 'rotate-180' : ''"
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          <div v-if="activeDropdown === 'mobile-software'" class="pl-4 pr-2 py-2 space-y-1">
            <router-link @click="closeMenu" to="/simulation" class="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">AEROS Simulation</router-link>
            <router-link @click="closeMenu" to="/design" class="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">AEROS Design</router-link>
            <router-link @click="closeMenu" to="/cloud" class="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">AEROS Cloud</router-link>
            <router-link @click="closeMenu" to="/enterprise" class="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">AEROS Enterprise</router-link>
          </div>
        </div>
        
        <!-- Mobile Services Dropdown -->
        <div>
          <button 
            @click="toggleDropdown('mobile-services')"
            class="w-full text-left flex justify-between items-center px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
            :class="activeDropdown === 'mobile-services' ? 'bg-gray-100' : ''"
          >
            <span>Services</span>
            <svg 
              class="w-4 h-4 transition-transform" 
              :class="activeDropdown === 'mobile-services' ? 'rotate-180' : ''"
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          <div v-if="activeDropdown === 'mobile-services'" class="pl-4 pr-2 py-2 space-y-1">
            <router-link @click="closeMenu" to="/consulting" class="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">Consulting</router-link>
            <router-link @click="closeMenu" to="/training" class="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">Training</router-link>
            <router-link @click="closeMenu" to="/support" class="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">Support</router-link>
            <router-link @click="closeMenu" to="/custom-development" class="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">Custom Development</router-link>
          </div>
        </div>
        
        <!-- Mobile Docs Dropdown -->
        <div>
          <button 
            @click="toggleDropdown('mobile-docs')"
            class="w-full text-left flex justify-between items-center px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
            :class="activeDropdown === 'mobile-docs' ? 'bg-gray-100' : ''"
          >
            <span>Docs</span>
            <svg 
              class="w-4 h-4 transition-transform" 
              :class="activeDropdown === 'mobile-docs' ? 'rotate-180' : ''"
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          <div v-if="activeDropdown === 'mobile-docs'" class="pl-4 pr-2 py-2 space-y-1">
            <router-link @click="closeMenu" to="/documentation" class="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">Documentation</router-link>
            <router-link @click="closeMenu" to="/tutorials" class="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">Tutorials</router-link>
            <router-link @click="closeMenu" to="/api" class="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">API Reference</router-link>
            <router-link @click="closeMenu" to="/examples" class="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">Examples</router-link>
          </div>
        </div>
        
        <router-link @click="closeMenu" to="/download" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">Download</router-link>
        <button class="w-full text-left block px-3 py-2 rounded-md text-base font-medium bg-primary text-white">
          Sign In
        </button>
      </div>
    </div>
  </nav>
</template>