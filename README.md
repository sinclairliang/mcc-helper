## MCC Helper

npm
license

**MCC Helper**is a utility library designed to assist in fetching and interpreting Merchant Category Codes (MCC) across various card networks.

### Features
🛍️ Retrieve human-readable descriptions for MCC codes.

🌐 Support for multiple networks: Visa, Stripe, and an official list.

🛠️ Graceful error handling for undefined or unknown MCCs.

🔄 Convert MCC codes provided as strings or numbers.
Installation
Install the package via npm:

```bash
npm install mcc-helper
```
Or using Yarn:

```bash
yarn add mcc-helper
```

### Usage
#### Basic Usage
```typescript

import { getMCC } from '@sinclairliang/mcc-helper';

const exampleMcc = getMCC(1750, 'visa');
console.log(exampleMcc);  
// Carpentry Contractors

const description = getMCC('4131', 'stripe');
console.log(description);  
// Bus Lines
```

### API
`getMCC(mcc: number | string | undefined, network?: string): string`

Fetches the description for a given MCC code.

- **mcc**: The MCC code. Can be a number, string, or undefined.
- **network** (optional): Specify the card network. Accepts 'visa', 'stripe', or leave undefined for the official list.
