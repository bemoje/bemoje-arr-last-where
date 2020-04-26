# @bemoje/arr-last-where

Return the first element of an array where the callback returns true.

#### Version

<span><a href="https://npmjs.org/@bemoje/arr-last-where" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/arr-last-where" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/arr-last-where" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-arr-last-where.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/arr-last-where" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-arr-last-where.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/arr-last-where" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/arr-last-where" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-arr-last-where/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-arr-last-where" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/arr-last-where
npm install --save @bemoje/arr-last-where
npm install --save-dev @bemoje/arr-last-where
```

## Usage

```javascript
import arrLastWhere from '@bemoje/arr-last-where'

const arr = [1, 2, 6, 3, 4, 5]

arrLastWhere(arr, (element) => {
	return element >= 5
})
//=> 5

arrLastWhere(arr, (element) => {
	return element >= 7
})
//=> null

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### arrLastWhere

Return the first element of an array where the callback returns true.

##### Parameters

-   `arr` **[Array][5]** The array to iterate

-   `callback` **[callback][6]** callback(element, index, array): boolean

##### Returns
**any** The first element to satisfy the condition

## callback

Type: [Function][7]

##### Parameters

-   `element` **any** The current element

-   `index` **[number][8]** The current element's index in the array

-   `array` **[Array][5]** The array

[1]: #arrlastwhere

[2]: #parameters

[3]: #callback

[4]: #parameters-1

[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[6]: #callback

[7]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[8]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number