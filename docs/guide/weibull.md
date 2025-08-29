# Weibull Toolbox® - Advanced Statistical Analysis

Weibull Toolbox® is an advanced statistical analysis suite designed to evaluate and model the failure characteristics of products and systems.

## Overview

The Weibull Toolbox® provides comprehensive statistical analysis capabilities for reliability engineering, quality control, and failure analysis.

## Key Features

### Distribution Fitting
- **Weibull Distribution** (2 & 3 parameter)
- **Exponential Distribution** (1 & 2 parameter)  
- **Normal Distribution** (standard & log)
- **Gamma Distribution** (2 & 3 parameter)

### Parameter Estimation Methods
- Maximum Likelihood Estimation (MLE)
- Method of Moments
- Least Squares Regression
- Probability Weighted Moments

### Analysis Capabilities
- **Probability Plotting** with confidence bounds
- **Life Data Analysis** for complete, censored, and interval data
- **Reliability Prediction** including MTTF and failure rates
- **Test Planning** for reliability demonstration
- **Data Comparison** and hypothesis testing

## Getting Started

### Basic Weibull Analysis

1. Import your failure data
2. Select the Weibull distribution
3. Choose parameter estimation method
4. Generate probability plot
5. Review statistical results

### Example Analysis

```python
import weibull_toolbox as wt

# Load failure data
data = [120, 180, 250, 300, 420, 500, 680, 750]

# Fit Weibull distribution
result = wt.weibull_fit(data, method='mle')

print(f"Shape parameter (β): {result.beta}")
print(f"Scale parameter (η): {result.eta}")
print(f"R-squared: {result.r_squared}")
```

## Advanced Features

### Confidence Intervals
- Fisher Matrix bounds
- Likelihood ratio bounds
- Bootstrap confidence intervals

### Goodness of Fit Tests
- Anderson-Darling test
- Kolmogorov-Smirnov test
- Correlation coefficient

### Specialized Plots
- Weibull probability plots
- Hazard rate plots
- Reliability vs time plots
- Contour plots for confidence regions