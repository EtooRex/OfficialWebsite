# Quick Start Guide

Get up and running with your first AEROS simulation in just a few minutes. This tutorial will walk you through creating, setting up, and running a basic simulation.

## Overview

In this quick start guide, you'll learn how to:

1. Create a new simulation project
2. Set up basic geometry and materials
3. Configure simulation parameters
4. Run your first simulation
5. Analyze and visualize results

**Estimated time**: 15-20 minutes

## Step 1: Create a New Project

### Launch AEROS

1. Open AEROS from your desktop or applications folder
2. You'll see the Welcome screen with recent projects and templates

### Choose a Template

1. Click **"New Project"** 
2. Select **"Structural Analysis"** from the template gallery
3. Enter project details:
   - **Name**: "My First Simulation"
   - **Location**: Choose a folder on your computer
   - **Description**: "Learning AEROS basics"
4. Click **"Create Project"**

## Step 2: Import or Create Geometry

### Option A: Use Sample Geometry

1. In the **Model Tree**, right-click **"Geometry"**
2. Select **"Import Sample"** > **"Simple Beam"**
3. A 3D beam model will appear in the viewport

### Option B: Import Your Own Model

1. Click **File** > **Import** > **Geometry**
2. Select your CAD file (supported formats: STEP, IGES, STL, OBJ)
3. Adjust import settings if needed
4. Click **"Import"**

### Viewing Your Model

- **Rotate**: Hold left mouse button and drag
- **Pan**: Hold middle mouse button and drag  
- **Zoom**: Use mouse wheel or right-click and drag
- **Fit to Screen**: Press `F` key

## Step 3: Define Materials

### Assign Material Properties

1. In the **Model Tree**, expand **"Materials"**
2. Right-click and select **"Add Material"**
3. Choose **"Steel - Structural"** from the material library
4. Review material properties:
   - **Young's Modulus**: 200 GPa
   - **Poisson's Ratio**: 0.3
   - **Density**: 7850 kg/m³

### Apply Material to Geometry

1. Select your geometry in the viewport
2. In the **Properties Panel**, set **Material** to "Steel - Structural"
3. The geometry will update to show the material assignment

## Step 4: Set Up Boundary Conditions

### Add Constraints

1. Click **"Constraints"** in the toolbar
2. Select **"Fixed Support"**
3. Click on one end of the beam to fix it
4. The constraint will appear as a triangle symbol

### Apply Loads

1. Click **"Loads"** in the toolbar
2. Select **"Force"**
3. Click on the free end of the beam
4. Set force parameters:
   - **Magnitude**: 1000 N
   - **Direction**: Downward (-Y)
5. Click **"Apply"**

## Step 5: Generate Mesh

### Automatic Meshing

1. Right-click **"Mesh"** in the Model Tree
2. Select **"Generate Mesh"**
3. Use default settings for this tutorial
4. Click **"Generate"**

The mesh will appear as a network of elements covering your geometry.

### Mesh Quality Check

1. Check the **Mesh Statistics** panel
2. Verify:
   - **Element Count**: Should be reasonable for your model size
   - **Quality**: Most elements should be "Good" or "Excellent"
   - **Warnings**: Address any critical warnings

## Step 6: Configure Simulation Settings

### Solver Configuration

1. Click **"Simulation"** in the Model Tree
2. Set simulation type to **"Static Structural"**
3. Configure solver settings:
   - **Solver**: Direct Sparse
   - **Convergence**: Default settings
   - **Output**: Stress, Strain, Displacement

### Analysis Options

1. Enable **"Large Deflection"** if expecting significant deformation
2. Set **"Number of Substeps"** to 1 for linear analysis
3. Configure **"Output Controls"** for desired results

## Step 7: Run the Simulation

### Start the Analysis

1. Click the **"Run"** button in the toolbar
2. Monitor progress in the **Solution Progress** window
3. Simulation should complete in 1-2 minutes for this simple model

### Monitor Progress

The progress window shows:
- **Current Step**: Which analysis step is running
- **Convergence**: How well the solution is converging
- **Estimated Time**: Remaining time for completion
- **Memory Usage**: Current memory consumption

## Step 8: Analyze Results

### View Results

1. Once complete, the **Results** branch will populate
2. Double-click **"Total Deformation"** to view displacement
3. The model will display with a color contour showing deformation

### Result Visualization

1. **Contour Plots**: Show stress, strain, or displacement distributions
2. **Vector Plots**: Display force or displacement directions
3. **Animation**: Animate the deformation for better understanding

### Key Results to Check

- **Maximum Stress**: Ensure it's below material yield strength
- **Maximum Displacement**: Verify it meets design requirements
- **Safety Factor**: Calculate margin of safety

## Step 9: Generate Reports

### Automatic Report Generation

1. Right-click **"Results"** in the Model Tree
2. Select **"Generate Report"**
3. Choose report template:
   - **Executive Summary**: High-level results
   - **Technical Report**: Detailed analysis
   - **Custom Report**: User-defined content

### Export Results

1. **Images**: Export high-quality result images
2. **Data**: Export numerical results to CSV or Excel
3. **Animation**: Create videos of result animations

## Understanding Your Results

### Interpreting Stress Results

- **Von Mises Stress**: Combined stress measure for ductile materials
- **Principal Stresses**: Maximum and minimum stress values
- **Safety Factor**: Ratio of material strength to applied stress

### Displacement Analysis

- **Total Deformation**: Overall displacement magnitude
- **Directional Displacement**: Movement in X, Y, or Z directions
- **Relative Displacement**: Movement between different parts

## Next Steps

Congratulations! You've completed your first AEROS simulation. Here's what to explore next:

### Intermediate Tutorials

- **[Advanced Meshing Techniques](/learn/advanced-meshing)**
- **[Nonlinear Analysis](/learn/nonlinear-analysis)**
- **[Dynamic Simulations](/learn/dynamic-analysis)**

### Advanced Features

- **[Design Optimization](/learn/design-optimization)**
- **[Parametric Studies](/learn/parametric-studies)**
- **[Multi-physics Simulations](/learn/multiphysics)**

### Best Practices

- **[Modeling Guidelines](/learn/modeling-best-practices)**
- **[Mesh Quality Guidelines](/learn/mesh-quality)**
- **[Result Validation](/learn/result-validation)**

## Tips for Success

### Modeling Best Practices

1. **Start Simple**: Begin with simplified geometry and add complexity gradually
2. **Check Units**: Ensure consistent units throughout your model
3. **Validate Results**: Compare with hand calculations or known solutions
4. **Document Your Work**: Add notes and comments to your project

### Performance Tips

1. **Optimize Geometry**: Remove unnecessary details that don't affect results
2. **Efficient Meshing**: Use appropriate element sizes for your analysis
3. **Solver Selection**: Choose the right solver for your problem type
4. **Resource Management**: Monitor memory and CPU usage

### Common Pitfalls to Avoid

- **Over-constraining**: Don't add unnecessary constraints
- **Under-meshing**: Ensure adequate mesh density in critical areas
- **Ignoring Warnings**: Address solver warnings and errors
- **Unrealistic Loads**: Verify load magnitudes and directions

---

Ready for more advanced topics? Continue with our [AeROS User Guide](/learn/aeros-guide) or explore [Design Optimization](/learn/design-optimization).