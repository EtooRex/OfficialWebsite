# API Reference

Welcome to the EtooreRex API documentation. Our APIs provide programmatic access to AeROS® and Weibull Toolbox® functionality.

## Getting Started

### Authentication

All API requests require authentication using API keys. Include your API key in the request headers:

```http
Authorization: Bearer YOUR_API_KEY
```

### Base URL

```
https://api.etoorerex.com/v1
```

## API Categories

### Simulation API
The Simulation API allows you to create, manage, and run reliability simulations programmatically.

**Endpoints:**
- `GET /simulations` - List all simulations
- `POST /simulations` - Create a new simulation
- `GET /simulations/{id}` - Get simulation details
- `PUT /simulations/{id}` - Update simulation
- `DELETE /simulations/{id}` - Delete simulation
- `POST /simulations/{id}/run` - Execute simulation
- `GET /simulations/{id}/results` - Get simulation results

### Analysis API
The Analysis API provides access to Weibull Toolbox® statistical analysis capabilities.

**Endpoints:**
- `POST /analysis/weibull` - Perform Weibull analysis
- `POST /analysis/distribution-fit` - Fit distributions to data
- `POST /analysis/reliability-prediction` - Calculate reliability metrics
- `GET /analysis/distributions` - List supported distributions

## Code Examples

### Python Example

```python
import requests

API_KEY = "your_api_key"
BASE_URL = "https://api.etoorerex.com/v1"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

# Create a new simulation
simulation_data = {
    "name": "My Reliability Analysis",
    "description": "Production system reliability study",
    "model_type": "reliability_block_diagram",
    "parameters": {
        "mission_time": 8760,
        "confidence_level": 0.95
    }
}

response = requests.post(
    f"{BASE_URL}/simulations",
    json=simulation_data,
    headers=headers
)

simulation = response.json()
print(f"Created simulation: {simulation['id']}")
```

### JavaScript Example

```javascript
const API_KEY = "your_api_key";
const BASE_URL = "https://api.etoorerex.com/v1";

const headers = {
  "Authorization": `Bearer ${API_KEY}`,
  "Content-Type": "application/json"
};

// Perform Weibull analysis
const analysisData = {
  data: [100, 150, 200, 250, 300, 350, 400],
  distribution: "weibull",
  estimation_method: "mle"
};

fetch(`${BASE_URL}/analysis/weibull`, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(analysisData)
})
  .then(response => response.json())
  .then(results => {
    console.log("Analysis results:", results);
  })
  .catch(error => {
    console.error("Error:", error);
  });
```

## Rate Limiting

API requests are limited to:
- **Free tier**: 100 requests per hour
- **Professional**: 1,000 requests per hour  
- **Enterprise**: 10,000 requests per hour

## Error Handling

The API uses standard HTTP status codes:

- `200` - Success
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `429` - Rate Limited
- `500` - Internal Server Error

Error responses include detailed error messages:

```json
{
  "error": {
    "code": "INVALID_PARAMETER",
    "message": "The parameter 'mission_time' must be a positive number",
    "details": {
      "parameter": "mission_time",
      "provided_value": -100
    }
  }
}
```

## SDKs and Libraries

We provide official SDKs for popular programming languages:

- **Python**: `pip install etoorerex-sdk`
- **JavaScript/Node.js**: `npm install @etoorerex/sdk`
- **R**: `install.packages("etoorerex")`
- **MATLAB**: Available through MATLAB File Exchange

## Support

For API support:
- Email: api-support@etoorerex.com
- Documentation issues: docs@etoorerex.com
- Feature requests: feedback@etoorerex.com