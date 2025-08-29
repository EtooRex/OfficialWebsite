# API Reference

Complete API documentation for AEROS products, enabling integration with your existing systems and workflows.

## Overview

The AEROS API provides programmatic access to our reliability analysis capabilities, allowing you to:

- Automate analysis workflows
- Integrate with existing systems
- Build custom applications
- Process large datasets efficiently

## Authentication

All API requests require authentication using API keys. Contact our support team to obtain your API credentials.

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
     https://api.aeros.com/v1/simulations
```

## Base URL

```
https://api.aeros.com/v1
```

## Rate Limiting

API requests are limited to 1000 requests per hour per API key. Contact us for higher limits if needed.

## Endpoints

### Simulations API
- `GET /simulations` - List all simulations
- `POST /simulations` - Create new simulation
- `GET /simulations/{id}` - Get simulation details
- `PUT /simulations/{id}` - Update simulation
- `DELETE /simulations/{id}` - Delete simulation
- `POST /simulations/{id}/run` - Execute simulation

### Analysis API
- `POST /analysis/weibull` - Perform Weibull analysis
- `POST /analysis/reliability` - Calculate reliability metrics
- `GET /analysis/{id}/results` - Get analysis results

## SDKs and Libraries

We provide official SDKs for popular programming languages:

- **Python**: `pip install aeros-sdk`
- **JavaScript/Node.js**: `npm install @aeros/sdk`
- **R**: `install.packages("aeros")`

## Examples

### Python Example
```python
import aeros

client = aeros.Client(api_key="your_api_key")
simulation = client.simulations.create({
    "name": "My Simulation",
    "model": "reliability_block_diagram",
    "parameters": {...}
})
results = simulation.run()
```

### JavaScript Example
```javascript
const aeros = require('@aeros/sdk');

const client = new aeros.Client({
  apiKey: 'your_api_key'
});

const simulation = await client.simulations.create({
  name: 'My Simulation',
  model: 'reliability_block_diagram',
  parameters: {...}
});

const results = await simulation.run();
```

## Error Handling

The API uses standard HTTP status codes and returns detailed error messages in JSON format.

## Support

For API support and questions:
- Email: api-support@aeros.com
- Documentation: Full API reference available
- Community: Join our developer community