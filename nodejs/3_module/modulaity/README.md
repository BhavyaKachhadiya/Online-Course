```markdown
# Calculator Module

## `calculator.js`

This file defines a module that provides basic arithmetic operations.
```
```javascript
// calculator.js

function add(a, b) {
    console.log(a + b);
}

function sub(a, b) {
    console.log(a - b);
}

function mul(a, b) {
    console.log(a * b);
}

function div(a, b) {
    console.log(a / b);
}

module.exports = {
    addition: add,
    subtraction: sub,
    multiplication: mul,
    division: div,
}
```

### Functions:

- `add(a, b)`: Adds two numbers `a` and `b`.
- `sub(a, b)`: Subtracts `b` from `a`.
- `mul(a, b)`: Multiplies `a` and `b`.
- `div(a, b)`: Divides `a` by `b`.

## `index.js`

This file demonstrates how to use the functions provided by the `calculator` module.

```markdown
# Calculator Module
## `index.js`
```
```js

const calculator = require('./calculator');

calculator.addition(10, 20);
calculator.subtraction(10, 20);
calculator.multiplication(10, 20);
calculator.division(10, 20);
```

### Usage:

- `addition(a, b)`: Adds `a` and `b`.
- `subtraction(a, b)`: Subtracts `b` from `a`.
- `multiplication(a, b)`: Multiplies `a` and `b`.
- `division(a, b)`: Divides `a` by `b`.
