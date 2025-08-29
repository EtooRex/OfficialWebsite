<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    
    <main class="flex-1 pt-20">
      <!-- Hero Section -->
      <div class="bg-primary/10 py-16">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl font-bold text-dark mb-4">AEROS Documentation</h1>
          <p class="text-xl text-gray-600 max-w-3xl">
            Welcome to the comprehensive documentation for AEROS reliability engineering platform.
          </p>
        </div>
      </div>
      
      <!-- Main Documentation Content -->
      <div class="container mx-auto px-4 py-16">
        <!-- What is AEROS Section -->
        <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 class="text-3xl font-bold text-dark mb-6">What is AEROS?</h2>
          <p class="text-lg text-gray-600 mb-8">
            AEROS is the next generation platform for engineering simulation and design optimization, providing advanced tools for reliability analysis and asset management.
          </p>
        </div>

        <!-- Quick Navigation Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <!-- Getting Started Card -->
          <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <svg class="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span class="text-blue-800 font-semibold text-sm">Getting Started</span>
            </div>
            <p class="text-gray-700 mb-4">
              New to AEROS? Start with our Introduction Guide to learn the basics.
            </p>
            <router-link to="/guide" class="text-blue-600 font-medium hover:underline">
              Read Introduction Guide →
            </router-link>
          </div>

          <!-- Products Card -->
          <div class="bg-green-50 border border-green-200 rounded-lg p-6">
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg class="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <span class="text-green-800 font-semibold text-sm">Products</span>
            </div>
            <div class="space-y-3">
              <div>
                <router-link to="/aeros" class="text-green-600 font-medium hover:underline block">
                  AeROS® →
                </router-link>
                <p class="text-sm text-gray-600">Asset Reliability and Operations Simulation</p>
              </div>
              <div>
                <router-link to="/weibull-toolbox" class="text-green-600 font-medium hover:underline block">
                  Weibull Toolbox® →
                </router-link>
                <p class="text-sm text-gray-600">Advanced statistical analysis suite</p>
              </div>
            </div>
          </div>

          <!-- API Reference Card -->
          <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                <svg class="w-4 h-4 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <span class="text-yellow-800 font-semibold text-sm">API Reference</span>
            </div>
            <p class="text-gray-700 mb-4">
              Developers can explore our API documentation for integration guides.
            </p>
            <a href="http://localhost:5174/api/" target="_blank" class="text-yellow-600 font-medium hover:underline">
              View API Docs →
            </a>
          </div>
        </div>

        <!-- Key Features Section -->
        <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 class="text-3xl font-bold text-dark mb-8 text-center">Key Features</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex items-start">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-dark mb-2">Advanced Simulation</h3>
                <p class="text-gray-600">Powerful simulation tools for complex engineering problems</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-dark mb-2">Design Optimization</h3>
                <p class="text-gray-600">AI-powered design optimization capabilities</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-dark mb-2">Statistical Analysis</h3>
                <p class="text-gray-600">Comprehensive reliability and failure analysis</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-dark mb-2">Cloud Computing</h3>
                <p class="text-gray-600">Scalable cloud-based simulation platform</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Documentation Sections -->
        <div class="space-y-8">
          <!-- Getting Started Section -->
          <div id="getting-started" class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-bold text-dark mb-6">Getting Started</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 class="text-lg font-bold text-dark mb-3">Introduction</h3>
                <p class="text-gray-600 mb-4">Learn about AEROS platform and its capabilities.</p>
                <a href="http://localhost:5174/guide/" target="_blank" class="text-primary font-medium hover:underline">Read Guide →</a>
              </div>
              
              <div class="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 class="text-lg font-bold text-dark mb-3">Installation</h3>
                <p class="text-gray-600 mb-4">System requirements and installation instructions.</p>
                <a href="http://localhost:5174/guide/installation" target="_blank" class="text-primary font-medium hover:underline">View Installation →</a>
              </div>
              
              <div class="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 class="text-lg font-bold text-dark mb-3">Quick Start</h3>
                <p class="text-gray-600 mb-4">Get up and running with your first simulation.</p>
                <a href="http://localhost:5174/guide/quick-start" target="_blank" class="text-primary font-medium hover:underline">Start Tutorial →</a>
              </div>
            </div>
          </div>

          <!-- Products Section -->
          <div id="products" class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-bold text-dark mb-6">Products</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-dark">AeROS®</h3>
                </div>
                <p class="text-gray-600 mb-4">
                  Asset Reliability and Operations Simulation - Advanced RAM analysis tool for heavy asset industries with specialized features for realistic simulations.
                </p>
                <div class="space-y-2">
                  <a href="http://localhost:5174/guide/aeros" target="_blank" class="text-primary font-medium hover:underline block">
                    View Documentation →
                  </a>
                  <router-link to="/aeros" class="text-gray-600 hover:text-primary transition-colors block">
                    Product Overview →
                  </router-link>
                </div>
              </div>
              
              <div class="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-dark">Weibull Toolbox®</h3>
                </div>
                <p class="text-gray-600 mb-4">
                  Advanced statistical analysis suite designed to evaluate and model the failure characteristics of products and systems.
                </p>
                <div class="space-y-2">
                  <a href="http://localhost:5174/guide/weibull" target="_blank" class="text-primary font-medium hover:underline block">
                    View Documentation →
                  </a>
                  <router-link to="/weibull-toolbox" class="text-gray-600 hover:text-primary transition-colors block">
                    Product Overview →
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- API Reference Section -->
          <div id="api-section" class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-bold text-dark mb-6">API Reference</h2>
            <p class="text-gray-600 mb-6">
              Complete API documentation for AEROS products with examples and integration guides.
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div class="border border-gray-200 rounded-lg p-4">
                <h4 class="font-semibold text-dark mb-2">Authentication</h4>
                <p class="text-sm text-gray-600 mb-3">Learn how to authenticate with AEROS APIs</p>
                <div class="bg-gray-50 p-3 rounded text-sm font-mono">
                  Authorization: Bearer YOUR_API_KEY
                </div>
              </div>
              
              <div class="border border-gray-200 rounded-lg p-4">
                <h4 class="font-semibold text-dark mb-2">Simulation API</h4>
                <p class="text-sm text-gray-600 mb-3">Create and manage simulations programmatically</p>
                <div class="bg-gray-50 p-3 rounded text-sm font-mono">
                  POST /api/v1/simulations
                </div>
              </div>
            </div>
            
            <div class="text-center">
              <a href="http://localhost:5174/api/" target="_blank" class="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-lg transition-colors inline-block">
                View Complete API Documentation
              </a>
            </div>
          </div>

          <!-- Quick Links Section -->
          <div class="bg-gray-50 rounded-lg p-8">
            <h2 class="text-2xl font-bold text-dark mb-6 text-center">Quick Links</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a href="http://localhost:5174/guide/" target="_blank" class="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                <div class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span class="text-sm font-medium text-dark">Guide</span>
              </a>
              
              <a href="http://localhost:5174/guide/installation" target="_blank" class="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                <div class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <span class="text-sm font-medium text-dark">Installation</span>
              </a>
              
              <a href="http://localhost:5174/guide/quick-start" target="_blank" class="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                <div class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span class="text-sm font-medium text-dark">Quick Start</span>
              </a>
              
              <a href="http://localhost:5174/api/" target="_blank" class="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                <div class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <span class="text-sm font-medium text-dark">API</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    <FooterSection />
  </div>
</template>