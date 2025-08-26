<script setup lang="ts">
</script>

<template>
  <div class="pt-20">
    <div class="bg-primary/10 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-dark mb-4">AeROS® - Asset Reliability and Operations Simulation</h1>
        <p class="text-xl text-gray-600 max-w-3xl">
          Advanced Reliability, Availability, Maintainability (RAM) analysis tool for heavy asset industry with specialized features for realistic simulations
        </p>
      </div>
    </div>
    
    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 class="text-3xl font-bold text-dark mb-6">Advanced RAM Analysis</h2>
          <p class="text-gray-600 mb-6">
            AeROS® extends beyond standard Reliability Block Diagram functionality (Series/Parallel, Sub-diagram, K-out-of-N) with advanced logical constructs and specialized features designed for heavy asset industries.
          </p>
          <ul class="space-y-3">
            <li class="flex items-start">
              <svg class="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Reliability Block Diagram modeling</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Monte Carlo simulation engine</span>
            </li>
            <li class="flex items-start">
              <svg class="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Advanced maintenance modeling</span>
            </li>
          </ul>
          <p class="text-gray-600 mb-6">
            The oil and gas industry is defined by extremely high-value production, incredibly harsh operating environments, severe safety risks, and massive capital investments. Unplanned downtime can cost hundreds of thousands to millions of dollars per day. RAM analysis is not just an engineering exercise here; it's a critical business and risk management tool.

1. During Design & Capital Projects (Front-End Engineering Design - FEED)
This is where RAM analysis provides the highest return on investment.

System Design Comparison: Before spending billions on construction, engineers can model different design configurations (e.g., different pump types, single vs. redundant trains, different control system architectures). The analysis answers:

"Which design will yield the highest overall availability over its life?"

"Is the added cost of a redundant compressor justified by the production it will save?"

Identifying Bottlenecks Early: The model can pinpoint the single component whose failure would have the largest impact on overall production (the "single point of failure"). This allows designers to mitigate that risk before it's built into the system, avoiding astronomically expensive retrofits later.

Setting Realistic Performance Targets: It provides a data-driven basis for guarantees on uptime and production volumes between operators and Engineering, Procurement, and Construction (EPC) firms.

2. For Operational Assets (Production & Maintenance)
For existing platforms, refineries, and pipelines, RAM analysis shifts the focus from reactive to proactive and predictive strategies.

Optimizing Maintenance Strategies: The model can test different maintenance approaches:

What is the optimal frequency for preventive maintenance?

Would switching from preventive to predictive (condition-based) maintenance for a specific pump improve availability?

What is the economic impact of deferring a planned shutdown?

Managing Spare Parts Inventory: By understanding the criticality and failure modes of equipment, companies can optimize their spare parts holdings. The analysis helps avoid the cost of stocking unnecessary parts while ensuring critical spares are available to minimize repair times for high-impact equipment.

Debottlenecking Production: If an asset is not meeting production targets, a RAM analysis can determine if the shortfall is due to mechanical reliability issues or other process constraints, guiding where to invest improvement capital.

3. Safety and Risk Mitigation
Reducing Dangerous Interventions: By improving reliability and planning maintenance better, the number of times personnel must be exposed to hazardous environments for troubleshooting or repair is significantly reduced.

Preventing Major accidents: Equipment failure is a primary initiating event for major incidents. A robust RAM program that ensures equipment is reliable and well-maintained is a foundational element of process safety management (PSM).
          </p>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="AeROS Asset Reliability" 
            class="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
      
      <div class="bg-white p-8 rounded-lg shadow-xl mb-16">
        <h3 class="text-2xl font-bold text-dark mb-6 text-center">Key Features</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-dark mb-2">Reliability Block Diagrams</h4>
            <p class="text-gray-600">Create complex system models with series, parallel, and K-out-of-N configurations</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-dark mb-2">Monte Carlo Simulation</h4>
            <p class="text-gray-600">Advanced simulation engine for accurate reliability and availability predictions</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-dark mb-2">Maintenance Optimization</h4>
            <p class="text-gray-600">Model and optimize maintenance strategies for maximum asset performance</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-dark mb-2">Modeling of Complex Process Scenarios</h4>
            <p class="text-gray-600">Includes Redundant Resource Manager for complex standby scenarios</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-dark mb-2">Realistic Simulation with Life Stress Model</h4>
            <p class="text-gray-600">Features Life-Stress Models using cumulative damage theory to analyze production rate impacts</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-dark mb-2">Advanced Plots</h4>
            <p class="text-gray-600">Delivers specialized plots: System Availability, System Flowrate, and Spare Availability</p>
          </div>
        </div>
      </div>
      
      <div class="text-center">
        <h2 class="text-3xl font-bold text-dark mb-8">Ready to optimize your asset reliability?</h2>
        <button class="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg transition-colors">
          Request Trial Access
        </button>
      </div>
    </div>
  </div>
</template>