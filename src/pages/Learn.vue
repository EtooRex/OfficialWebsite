<script setup lang="ts">
</script>

<template>
  <div class="pt-20">
    <div class="bg-primary/10 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-dark mb-4">Learn</h1>
        <p class="text-xl text-gray-600 max-w-3xl">
          Comprehensive learning resources to help you master reliability engineering and our software tools.
        </p>
      </div>
    </div>
    
    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div class="bg-white p-8 rounded-lg shadow-md">
          <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-dark mb-3">Documentation</h3>
          <p class="text-gray-600 mb-4">
            Comprehensive guides and documentation for AeROS® and Weibull Toolbox® to help you get started quickly.
          </p>
          <router-link to="/software" class="text-primary font-medium hover:underline">Read documentation →</router-link>
        </div>
        
        <div class="bg-white p-8 rounded-lg shadow-md">
          <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-dark mb-3">Video Tutorials</h3>
          <p class="text-gray-600 mb-4">
            Step-by-step video tutorials covering everything from basic concepts to advanced reliability analysis techniques.
          </p>
          <router-link to="/tutorials" class="text-primary font-medium hover:underline">Watch tutorials →</router-link>
        </div>
        
        <div class="bg-white p-8 rounded-lg shadow-md">
          <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-dark mb-3">API Reference</h3>
          <p class="text-gray-600 mb-4">
            Complete API documentation for developers looking to integrate our reliability analysis capabilities.
          </p>
          <a href="#" class="text-primary font-medium hover:underline">View API docs →</a>
        </div>
      </div>
      
      <div class="bg-white p-8 rounded-lg shadow-xl mb-16">
        <h3 class="text-2xl font-bold text-dark mb-6">Popular Learning Resources</h3>
        <div class="space-y-6">
          <div class="border-b border-gray-200 pb-6">
            <h4 class="text-lg font-semibold text-dark mb-2">Getting Started with AeROS®</h4>
            <p class="text-gray-600 mb-3">
              Learn the fundamentals of reliability block diagram modeling and Monte Carlo simulation with AeROS®.
            </p>
            <div class="flex items-center text-sm text-gray-500">
              <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium mr-2">Beginner</span>
              <span>30 min read</span>
            </div>
          </div>
          
          <div class="border-b border-gray-200 pb-6">
            <h4 class="text-lg font-semibold text-dark mb-2">Weibull Analysis Fundamentals</h4>
            <p class="text-gray-600 mb-3">
              Master the basics of Weibull distribution analysis and parameter estimation techniques.
            </p>
            <div class="flex items-center text-sm text-gray-500">
              <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium mr-2">Intermediate</span>
              <span>45 min read</span>
            </div>
          </div>
          
          <div class="border-b border-gray-200 pb-6">
            <h4 class="text-lg font-semibold text-dark mb-2">Advanced Maintenance Modeling</h4>
            <p class="text-gray-600 mb-3">
              Explore advanced maintenance strategies and optimization techniques for asset reliability.
            </p>
            <div class="flex items-center text-sm text-gray-500">
              <span class="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium mr-2">Advanced</span>
              <span>60 min read</span>
            </div>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold text-dark mb-2">Industry Best Practices</h4>
            <p class="text-gray-600 mb-3">
              Learn industry best practices for implementing reliability engineering in your organization.
            </p>
            <div class="flex items-center text-sm text-gray-500">
              <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium mr-2">Expert</span>
              <span>90 min read</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div class="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg">
          <h3 class="text-2xl font-bold text-dark mb-4">Interactive Learning</h3>
          <p class="text-gray-600 mb-6">
            Try our interactive tutorials and hands-on exercises to practice reliability analysis techniques.
          </p>
          <button class="bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-lg transition-colors">
            Start Interactive Tutorial
          </button>
        </div>
        
        <div class="bg-gradient-to-r from-gray-100 to-gray-50 p-8 rounded-lg">
          <h3 class="text-2xl font-bold text-dark mb-4">Community Forum</h3>
          <p class="text-gray-600 mb-6">
            Connect with other reliability engineers, ask questions, and share knowledge in our community forum.
          </p>
          <button class="bg-gray-800 hover:bg-gray-700 text-white font-bold px-6 py-3 rounded-lg transition-colors">
            Join Community
          </button>
        </div>
      </div>
      
      <div class="text-center">
        <h2 class="text-3xl font-bold text-dark mb-8">Need personalized training?</h2>
        <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
          Our expert trainers can provide customized training programs tailored to your team's specific needs.
        </p>
        <router-link to="/training" class="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg transition-colors inline-block">
          Explore Training Options
        </router-link>
      </div>
    </div>
  </div>
</template>