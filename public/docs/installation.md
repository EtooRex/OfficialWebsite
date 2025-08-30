# Reliability Data Analysis: Life Data Analysis

## Introduction

Life Data Analysis (LDA), also known as Weibull Analysis or Reliability Analysis, is a statistical approach used to evaluate the time-to-failure data of products or systems. This method helps engineers and decision-makers understand how long a product is likely to function before failure, enabling informed predictions about reliability, maintainability, and performance.

By fitting lifetime data to probability distributions---such as the Weibull, exponential, or lognormal---LDA provides critical metrics like:

*   **Mean Time To Failure (MTTF)**
*   **Failure Rate**
*   **Reliability over time**

These insights support better product design, warranty planning, and maintenance scheduling.

LDA plays a crucial role across industries where operational uptime and safety are essential, including aerospace, manufacturing, electronics, and energy. It allows organizations to make data-driven decisions by quantifying failure behavior and identifying the dominant failure modes.

Additionally, LDA can incorporate both complete failure data and **censored (incomplete) data**, such as items still functioning at the end of a test or removed for other reasons. By doing so, it offers a flexible and powerful framework to improve system reliability and optimize lifecycle costs.

---

## Statistical Background

### Random Variable

A random variable is a numerical value that represents the outcome of a random experiment. It assigns numbers to the possible results of that experiment, allowing us to analyze and model uncertainty using mathematics. Random variables are fundamental in probability and statistics, as they help quantify outcomes and calculate probabilities.

There are two main types of random variables:

1.  **Discrete Random Variable:** Takes on countable values (e.g., 0, 1, 2, or 3 failures in a test). Often arises from processes like counting or classification. Described using **Probability Mass Functions (PMFs)**.
2.  **Continuous Random Variable:** Can take on any value within a range or interval (e.g., the exact time to failure of a component). Typically measured rather than counted. Described using **Probability Density Functions (PDFs)**.

> **In Life Data Analysis, we only handle continuous random variables.**