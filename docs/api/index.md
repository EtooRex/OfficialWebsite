# API Reference

Complete API documentation for AEROS products with examples and integration guides.

## Authentication

All API requests require authentication using API keys:

```javascript
const headers = {
  'Authorization': 'Bearer YOUR_API_KEY',
  'Content-Type': 'application/json'
};
```

## Simulation API

### Create Simulation

```http
POST /api/v1/simulations
```

**Request Body:**
```json
{
  "name": "My Simulation",
  "model": "reliability_block_diagram",
  "parameters": {
    "components": [
      {
        "name": "Pump A",
        "mtbf": 8760,
        "distribution": "weibull"
      }
    ]
  }
}
```

### Run Simulation

```http
POST /api/v1/simulations/{id}/run
```

### Get Results

```http
GET /api/v1/simulations/{id}/results
```

**Response:**
```json
{
  "availability": 0.95,
  "mtbf": 8760,
  "mttr": 24,
  "confidence_interval": {
    "lower": 0.92,
    "upper": 0.98
  }
}
```

## Weibull API

### Fit Distribution

```http
POST /api/v1/weibull/fit
```

**Request Body:**
```json
{
  "data": [120, 180, 250, 300, 420],
  "method": "mle",
  "distribution": "weibull"
}
```

**Response:**
```json
{
  "beta": 2.5,
  "eta": 350.2,
  "r_squared": 0.95,
  "confidence_bounds": {
    "beta": [2.1, 2.9],
    "eta": [320.1, 380.3]
  }
}
```

## Error Handling

All API endpoints return standard HTTP status codes:

- `200` - Success
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error

Error responses include details:

```json
{
  "error": "Invalid parameter",
  "message": "MTBF must be greater than 0",
  "code": "INVALID_PARAMETER"
}
```