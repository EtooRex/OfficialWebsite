# Quick Start

Get up and running with AEROS in just a few minutes.

## Your First Simulation

### Step 1: Create a New Project

1. Launch AEROS
2. Click "New Project"
3. Choose a template or start from scratch
4. Name your project

### Step 2: Set Up Your Model

1. Define your system components
2. Set reliability parameters
3. Configure simulation settings
4. Review your model structure

### Step 3: Run the Simulation

1. Click "Run Simulation"
2. Monitor progress in real-time
3. Review results when complete
4. Export or save your analysis

## Example: Simple Reliability Analysis

Here's a basic example of setting up a reliability analysis:

```javascript
// Define component reliability
const pump = {
  name: "Main Pump",
  mtbf: 8760, // hours
  distribution: "weibull"
};

// Run simulation
const results = await runSimulation({
  components: [pump],
  duration: 8760,
  iterations: 10000
});

console.log(`Availability: ${results.availability}%`);
```

## Next Steps

- Explore [AeROS® features](/guide/aeros)
- Learn about [Weibull analysis](/guide/weibull)
- Check out the [API reference](/api/)