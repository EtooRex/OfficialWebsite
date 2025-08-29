<script setup lang="ts">
import { ref, onMounted } from 'vue'

const activeSection = ref('overview')

const sections = [
  { id: 'overview', title: 'Overview', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { id: 'data-classification', title: 'Reliability Data Classification', icon: 'M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2' },
  { id: 'complete-data', title: 'Complete Data', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  { id: 'censored-data', title: 'Censored Data', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
  { id: 'interval-data', title: 'Interval Data', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { id: 'resources', title: 'Learning Resources', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' }
]

const scrollToSection = (sectionId: string) => {
  activeSection.value = sectionId
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { threshold: 0.3 }
  )

  sections.forEach((section) => {
    const element = document.getElementById(section.id)
    if (element) observer.observe(element)
  })
})
</script>

<template>
  <div class="pt-20 min-h-screen bg-gray-50">
    <!-- Header section -->
    <div class="bg-primary/10 py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-dark mb-4">Learn Reliability Engineering</h1>
        <p class="text-xl text-gray-600 max-w-3xl">
          Master the fundamentals of reliability data analysis and statistical methods for engineering applications.
        </p>
      </div>
    </div>
    
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Table of Contents Sidebar -->
        <div class="lg:w-1/4">
          <div class="bg-white rounded-lg shadow-lg p-6 sticky top-24">
            <h2 class="text-lg font-bold text-dark mb-4">Table of Contents</h2>
            <nav class="space-y-2">
              <button
                v-for="section in sections"
                :key="section.id"
                @click="scrollToSection(section.id)"
                :class="[
                  'w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center',
                  activeSection === section.id 
                    ? 'bg-primary/10 text-primary border-l-4 border-primary' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                ]"
              >
                <svg class="w-5 h-5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="section.icon" />
                </svg>
                <span class="text-sm font-medium">{{ section.title }}</span>
              </button>
            </nav>
            
            <!-- Quick Actions -->
            <div class="mt-8 pt-6 border-t border-gray-200">
              <h3 class="text-sm font-bold text-dark mb-3">Quick Actions</h3>
              <div class="space-y-2">
                <button class="w-full bg-primary hover:bg-primary/90 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors">
                  Download AeROS®
                </button>
                <button class="w-full bg-gray-100 hover:bg-gray-200 text-dark text-sm font-medium py-2 px-3 rounded-lg transition-colors">
                  Get Weibull Toolbox®
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Main Content -->
        <div class="lg:w-3/4">
          <div class="space-y-12">
            <!-- Overview Section -->
            <section id="overview" class="bg-white rounded-lg shadow-lg p-8">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 class="text-3xl font-bold text-dark">Overview</h2>
              </div>
              
              <p class="text-gray-600 mb-6 leading-relaxed">
                Reliability engineering is a critical discipline that focuses on the ability of a system or component to perform its required functions under stated conditions for a specified period. Understanding how to classify and analyze reliability data is fundamental to making informed engineering decisions.
              </p>
              
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-gray-50 p-6 rounded-lg">
                  <h3 class="text-lg font-bold text-dark mb-3">AeROS® Documentation</h3>
                  <p class="text-gray-600 mb-4">Comprehensive guides for Asset Reliability and Operations Simulation</p>
                  <router-link to="/aeros" class="text-primary font-medium hover:underline">Explore AeROS® →</router-link>
                </div>
                
                <div class="bg-gray-50 p-6 rounded-lg">
                  <h3 class="text-lg font-bold text-dark mb-3">Weibull Toolbox®</h3>
                  <p class="text-gray-600 mb-4">Advanced statistical analysis for reliability data</p>
                  <router-link to="/weibull-toolbox" class="text-primary font-medium hover:underline">Explore Weibull →</router-link>
                </div>
                
                <div class="bg-gray-50 p-6 rounded-lg">
                  <h3 class="text-lg font-bold text-dark mb-3">Training Programs</h3>
                  <p class="text-gray-600 mb-4">Expert-led training for your team</p>
                  <router-link to="/training" class="text-primary font-medium hover:underline">View Training →</router-link>
                </div>
              </div>
            </section>

            <!-- Reliability Data Classification Section -->
            <section id="data-classification" class="bg-white rounded-lg shadow-lg p-8">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                  </svg>
                </div>
                <h2 class="text-3xl font-bold text-dark">Reliability Data Classification</h2>
              </div>
              
              <div class="prose max-w-none">
                <p class="text-gray-600 mb-6 leading-relaxed">
                  Understanding how to properly classify reliability data is crucial for selecting appropriate analysis methods and obtaining accurate results. The type of data you have determines which statistical techniques can be applied and affects the reliability of your conclusions.
                </p>
                
                <div class="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                  <div class="flex items-start">
                    <svg class="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 class="text-lg font-bold text-blue-800 mb-2">Key Concept</h4>
                      <p class="text-blue-700">
                        Reliability data classification determines the statistical methods available for analysis and directly impacts the accuracy and validity of your reliability predictions.
                      </p>
                    </div>
                  </div>
                </div>
                
                <h3 class="text-2xl font-bold text-dark mb-4">Data Classification Framework</h3>
                <p class="text-gray-600 mb-6 leading-relaxed">
                  Reliability data can be classified into three main categories based on the completeness and precision of failure time information. Each category requires different analytical approaches and provides varying levels of statistical power.
                </p>
              </div>
            </section>

            <!-- Complete Data Section -->
            <section id="complete-data" class="bg-white rounded-lg shadow-lg p-8">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 class="text-3xl font-bold text-dark">Complete Data</h2>
              </div>
              
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 class="text-xl font-bold text-dark mb-4">Definition</h3>
                  <p class="text-gray-600 mb-6 leading-relaxed">
                    Complete data represents the ideal scenario where the exact failure time is known for every unit in the study. This provides the maximum amount of information for statistical analysis.
                  </p>
                  
                  <h4 class="text-lg font-semibold text-dark mb-3">Characteristics:</h4>
                  <ul class="space-y-2 mb-6">
                    <li class="flex items-start">
                      <svg class="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Exact failure times are recorded</span>
                    </li>
                    <li class="flex items-start">
                      <svg class="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>All units are observed until failure</span>
                    </li>
                    <li class="flex items-start">
                      <svg class="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Provides maximum statistical power</span>
                    </li>
                  </ul>
                </div>
                
                <div class="bg-green-50 p-6 rounded-lg">
                  <h4 class="text-lg font-semibold text-dark mb-3">Example Applications:</h4>
                  <ul class="space-y-3">
                    <li class="flex items-start">
                      <div class="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <div>
                        <span class="font-medium text-dark">Laboratory Testing:</span>
                        <p class="text-gray-600 text-sm">Components tested to failure under controlled conditions</p>
                      </div>
                    </li>
                    <li class="flex items-start">
                      <div class="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <div>
                        <span class="font-medium text-dark">Accelerated Life Testing:</span>
                        <p class="text-gray-600 text-sm">High-stress testing where all units fail within test duration</p>
                      </div>
                    </li>
                    <li class="flex items-start">
                      <div class="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <div>
                        <span class="font-medium text-dark">Historical Failure Records:</span>
                        <p class="text-gray-600 text-sm">Complete maintenance logs with exact failure timestamps</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <!-- Censored Data Section -->
            <section id="censored-data" class="bg-white rounded-lg shadow-lg p-8">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h2 class="text-3xl font-bold text-dark">Censored Data</h2>
              </div>
              
              <p class="text-gray-600 mb-6 leading-relaxed">
                Censored data occurs when the exact failure time is not observed for some units. This is common in real-world scenarios where testing time is limited or units are still operating at the end of the observation period.
              </p>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div class="bg-yellow-50 p-6 rounded-lg">
                  <h3 class="text-xl font-bold text-dark mb-4">Right Censoring</h3>
                  <p class="text-gray-600 mb-4">
                    The most common type where we know the unit survived beyond a certain time but don't know the exact failure time.
                  </p>
                  <div class="space-y-2">
                    <div class="flex items-center">
                      <div class="w-3 h-3 bg-yellow-600 rounded-full mr-2"></div>
                      <span class="text-sm text-gray-700">Test terminated before all failures</span>
                    </div>
                    <div class="flex items-center">
                      <div class="w-3 h-3 bg-yellow-600 rounded-full mr-2"></div>
                      <span class="text-sm text-gray-700">Units withdrawn from service</span>
                    </div>
                    <div class="flex items-center">
                      <div class="w-3 h-3 bg-yellow-600 rounded-full mr-2"></div>
                      <span class="text-sm text-gray-700">Lost to follow-up</span>
                    </div>
                  </div>
                </div>
                
                <div class="bg-orange-50 p-6 rounded-lg">
                  <h3 class="text-xl font-bold text-dark mb-4">Left Censoring</h3>
                  <p class="text-gray-600 mb-4">
                    We know the unit failed before a certain time but don't know the exact failure time.
                  </p>
                  <div class="space-y-2">
                    <div class="flex items-center">
                      <div class="w-3 h-3 bg-orange-600 rounded-full mr-2"></div>
                      <span class="text-sm text-gray-700">Failure detected at first inspection</span>
                    </div>
                    <div class="flex items-center">
                      <div class="w-3 h-3 bg-orange-600 rounded-full mr-2"></div>
                      <span class="text-sm text-gray-700">Historical data with unknown start times</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="bg-gray-50 p-6 rounded-lg">
                <h4 class="text-lg font-semibold text-dark mb-3">Statistical Implications:</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 class="font-medium text-dark mb-2">Advantages:</h5>
                    <ul class="space-y-1 text-sm text-gray-600">
                      <li>• Allows use of partial information</li>
                      <li>• More realistic for field data</li>
                      <li>• Cost-effective data collection</li>
                    </ul>
                  </div>
                  <div>
                    <h5 class="font-medium text-dark mb-2">Considerations:</h5>
                    <ul class="space-y-1 text-sm text-gray-600">
                      <li>• Requires specialized analysis methods</li>
                      <li>• Reduced statistical power</li>
                      <li>• Assumptions about censoring mechanism</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <!-- Interval Data Section -->
            <section id="interval-data" class="bg-white rounded-lg shadow-lg p-8">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 class="text-3xl font-bold text-dark">Interval Data</h2>
              </div>
              
              <p class="text-gray-600 mb-6 leading-relaxed">
                Interval data occurs when we know that failure occurred within a specific time interval but don't know the exact failure time. This is common in inspection-based maintenance programs.
              </p>
              
              <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div class="bg-blue-50 p-6 rounded-lg">
                  <h3 class="text-lg font-bold text-dark mb-3">Inspection-Based</h3>
                  <p class="text-gray-600 mb-4 text-sm">
                    Failures discovered during periodic inspections. We know failure occurred between the last good inspection and the inspection where failure was found.
                  </p>
                  <div class="text-xs text-blue-700 bg-blue-100 px-3 py-2 rounded">
                    Example: Monthly equipment checks
                  </div>
                </div>
                
                <div class="bg-indigo-50 p-6 rounded-lg">
                  <h3 class="text-lg font-bold text-dark mb-3">Grouped Data</h3>
                  <p class="text-gray-600 mb-4 text-sm">
                    Failure times grouped into intervals due to measurement limitations or data collection methods.
                  </p>
                  <div class="text-xs text-indigo-700 bg-indigo-100 px-3 py-2 rounded">
                    Example: Warranty claims by month
                  </div>
                </div>
                
                <div class="bg-purple-50 p-6 rounded-lg">
                  <h3 class="text-lg font-bold text-dark mb-3">Mixed Censoring</h3>
                  <p class="text-gray-600 mb-4 text-sm">
                    Combination of exact failure times, right censored observations, and interval data within the same dataset.
                  </p>
                  <div class="text-xs text-purple-700 bg-purple-100 px-3 py-2 rounded">
                    Example: Field reliability studies
                  </div>
                </div>
              </div>
              
              <div class="bg-gray-50 p-6 rounded-lg">
                <h4 class="text-lg font-semibold text-dark mb-4">Analysis Considerations for Interval Data:</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 class="font-medium text-dark mb-3">Statistical Methods:</h5>
                    <ul class="space-y-2 text-sm text-gray-600">
                      <li class="flex items-start">
                        <svg class="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                        Maximum likelihood estimation with interval likelihood
                      </li>
                      <li class="flex items-start">
                        <svg class="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                        Turnbull's nonparametric estimator
                      </li>
                      <li class="flex items-start">
                        <svg class="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                        EM algorithm for parameter estimation
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 class="font-medium text-dark mb-3">Best Practices:</h5>
                    <ul class="space-y-2 text-sm text-gray-600">
                      <li class="flex items-start">
                        <svg class="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                        Minimize interval width when possible
                      </li>
                      <li class="flex items-start">
                        <svg class="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                        Document inspection procedures clearly
                      </li>
                      <li class="flex items-start">
                        <svg class="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                        Consider inspection frequency optimization
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <!-- Learning Resources Section -->
            <section id="resources" class="bg-white rounded-lg shadow-lg p-8">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 class="text-3xl font-bold text-dark">Learning Resources</h2>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 class="text-xl font-bold text-dark mb-4">Software Tools</h3>
                  <div class="space-y-4">
                    <div class="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
                      <h4 class="font-semibold text-dark mb-2">AeROS® Training</h4>
                      <p class="text-gray-600 text-sm mb-3">Learn reliability block diagram modeling and Monte Carlo simulation</p>
                      <router-link to="/aeros" class="text-primary text-sm font-medium hover:underline">Start learning →</router-link>
                    </div>
                    
                    <div class="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
                      <h4 class="font-semibold text-dark mb-2">Weibull Toolbox® Guide</h4>
                      <p class="text-gray-600 text-sm mb-3">Master statistical analysis and distribution fitting techniques</p>
                      <router-link to="/weibull-toolbox" class="text-primary text-sm font-medium hover:underline">Start learning →</router-link>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 class="text-xl font-bold text-dark mb-4">Additional Resources</h3>
                  <div class="space-y-4">
                    <div class="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
                      <h4 class="font-semibold text-dark mb-2">Video Tutorials</h4>
                      <p class="text-gray-600 text-sm mb-3">Step-by-step video guides for practical applications</p>
                      <a href="#" class="text-primary text-sm font-medium hover:underline">Watch videos →</a>
                    </div>
                    
                    <div class="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
                      <h4 class="font-semibold text-dark mb-2">Case Studies</h4>
                      <p class="text-gray-600 text-sm mb-3">Real-world examples from various industries</p>
                      <a href="#" class="text-primary text-sm font-medium hover:underline">View cases →</a>
                    </div>
                    
                    <div class="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
                      <h4 class="font-semibold text-dark mb-2">Expert Consulting</h4>
                      <p class="text-gray-600 text-sm mb-3">Get personalized guidance from reliability experts</p>
                      <router-link to="/consulting" class="text-primary text-sm font-medium hover:underline">Learn more →</router-link>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Call to Action -->
              <div class="bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-lg text-center">
                <h3 class="text-2xl font-bold text-dark mb-4">Ready to Apply These Concepts?</h3>
                <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Put your knowledge into practice with our comprehensive software tools designed for reliability engineering professionals.
                </p>
                <div class="flex flex-col sm:flex-row justify-center gap-4">
                  <button class="bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-lg transition-colors">
                    Request Trial Access
                  </button>
                  <router-link to="/services" class="bg-white border-2 border-primary text-primary hover:bg-primary/5 font-bold px-6 py-3 rounded-lg transition-colors inline-block">
                    Explore Services
                  </router-link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Smooth scrolling behavior */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar for better UX */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #fc037b;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(252, 3, 123, 0.8);
}

/* Ensure proper spacing for anchor links */
section {
  scroll-margin-top: 2rem;
}
</style>