```markdown
# Printing "Hello World" in JavaScript

Printing "Hello World!" directly:

```js
console.log("Hello world!");
```

Printing "Hello World!" from a function:

```js
function sayHelloWorld() {
    console.log("Hello world!");
}
```

Calling the function:

```js
sayHelloWorld();
```

Attempting to access `window` in Node.js:

```js
console.log(window); // Throws a ReferenceError
```

In a browser environment, `window` is defined, but in Node.js, it is not.

The Error Message:

```bash
ReferenceError: window is not defined
```

Instead of `window`, we can use `global` in Node.js:

```js
console.log(global);
```