# lemonsoft-api-client

**LemonsoftApiClient** is a third party [Lemonsoft API](https://www.lemonsoft.fi/) client for NodeJS. It is a wrapper around an API client that has been [automatically generated](https://www.npmjs.com/package/swagger-typescript-api) using the [OpenAPI schema](https://rest-s01-prod02.lemonsoft.eu/Lemonsoft30/swagger/docs/v1) provided by Lemonsoft.

## Installation

Add to project's package.json:

```
npm install @rantalainen/lemonsoft-api-client
```

### Import to NodeJS project

```javascript
const { LemonsoftApiClient } = require('@rantalainen/lemonsoft-api-client');
```

### Import to TypeScript project

```javascript
import { LemonsoftApiClient } from '@rantalainen/lemonsoft-api-client';
```

## Setup client with options

```javascript
const lemonsoft = new LemonsoftApiClient(
  {
    userName: 'example@example.com',
    password: 'password',
    database: 'LemonDBx',
    apiKey: 'api_key'
  },
  {
    baseURL: 'https://rest-s01-prod02.lemonsoft.eu/Lemonsoft30'
  }
);
```

Available methods can be found in the [API documentation](https://rest-s01-prod02.lemonsoft.eu/Lemonsoft30/swagger/ui/index).
