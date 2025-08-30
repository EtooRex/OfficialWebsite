# API Reference

Complete API documentation for AEROS products.

## Authentication

All API requests require authentication using Bearer tokens:

```
Authorization: Bearer YOUR_API_KEY
```

## Simulation API

### Create Simulation
```
POST /api/v1/simulations
```

### Run Simulation
```
POST /api/v1/simulations/{id}/run
```

### Get Results
```
GET /api/v1/simulations/{id}/results
```

## Example Usage

```javascript
const response = await fetch('/api/v1/simulations', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'My Simulation',
    model: 'model_id'
  })
});
```

## Rate Limits

- 1000 requests per hour
- 100 concurrent simulations
- Contact support for higher limits