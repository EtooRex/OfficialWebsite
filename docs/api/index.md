# API Reference

Complete API documentation for developers looking to integrate our reliability analysis capabilities into their applications.

## Getting Started

The EtooreRex API provides programmatic access to AeROS® and Weibull Toolbox® functionality, allowing you to:

- Create and manage reliability models
- Run simulations and analyses
- Retrieve results and reports
- Integrate with existing systems

## Authentication

All API requests require authentication using API keys. You can obtain your API key from the developer dashboard.

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
     https://api.etoorerex.com/v1/models
```

## Base URL

```
https://api.etoorerex.com/v1
```

## Core Endpoints

### Models API

#### List Models
```http
GET /models
```

Returns a list of all reliability models in your account.

#### Create Model
```http
POST /models
```

Create a new reliability model.

**Request Body:**
```json
{
  "name": "Production Line Model",
  "type": "rbd",
  "description": "Reliability model for main production line"
}
```

#### Get Model
```http
GET /models/{id}
```

Retrieve a specific model by ID.

### Simulation API

#### Run Simulation
```http
POST /models/{id}/simulate
```

Execute a Monte Carlo simulation for the specified model.

**Request Body:**
```json
{
  "iterations": 10000,
  "time_horizon": 8760,
  "confidence_level": 0.95
}
```

#### Get Results
```http
GET /simulations/{id}/results
```

Retrieve simulation results.

### Analysis API

#### Weibull Analysis
```http
POST /analysis/weibull
```

Perform Weibull distribution analysis on failure data.

**Request Body:**
```json
{
  "data": [120, 150, 180, 200, 250],
  "censoring": [0, 0, 1, 0, 0],
  "method": "mle"
}
```

## Code Examples

### Python
```python
import requests

API_KEY = "your_api_key_here"
BASE_URL = "https://api.etoorerex.com/v1"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

# Create a new model
model_data = {
    "name": "My Reliability Model",
    "type": "rbd",
    "description": "Example model"
}

response = requests.post(
    f"{BASE_URL}/models",
    json=model_data,
    headers=headers
)

model_id = response.json()["id"]
print(f"Created model: {model_id}")
```

### JavaScript
```javascript
const API_KEY = "your_api_key_here";
const BASE_URL = "https://api.etoorerex.com/v1";

const headers = {
  "Authorization": `Bearer ${API_KEY}`,
  "Content-Type": "application/json"
};

// Create a new model
const modelData = {
  name: "My Reliability Model",
  type: "rbd",
  description: "Example model"
};

fetch(`${BASE_URL}/models`, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(modelData)
})
.then(response => response.json())
.then(data => {
  console.log("Created model:", data.id);
})
.catch(error => {
  console.error("Error:", error);
});
```

## Rate Limits

- **Free tier**: 100 requests per hour
- **Professional**: 1,000 requests per hour  
- **Enterprise**: Custom limits

## Error Handling

The API uses standard HTTP status codes:

- `200` - Success
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `429` - Rate Limited
- `500` - Internal Server Error

Error responses include detailed messages:

```json
{
  "error": {
    "code": "INVALID_MODEL_TYPE",
    "message": "The specified model type is not supported",
    "details": "Supported types: rbd, fault_tree, markov"
  }
}
```

::: tip Need Help?
Check out our [SDK libraries](https://github.com/etoorerex) for Python, JavaScript, and R to get started quickly.
:::