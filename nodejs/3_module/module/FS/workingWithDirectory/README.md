
# Directory Operations with `fs` Module

The `fs` module in Node.js provides an API for interacting with the file system, allowing for creating, reading, checking existence, and deleting directories.

## Creating a New Directory

To create a new directory synchronously, use `fs.mkdirSync()`:

```js
const fs = require('fs');

// creating a new directory
fs.mkdirSync('<name-of-Directory>');
```

- The `fs.mkdirSync()` method creates a new directory.

## Reading the Contents of a Directory

To read the contents of a directory synchronously, use `fs.readdirSync()`:

```js
// check the contents of a directory
let folderContent = fs.readdirSync('<path-of-your-directory>');
console.log("Folder Content", folderContent);
```

- The `fs.readdirSync()` method returns an array of the names of the files in the directory.

## Checking if a Directory Exists

To check if a directory exists synchronously, use `fs.existsSync()`:

```js
// check whether the directory exists or not
let exists = fs.existsSync('<path-of-your-directory>');
console.log("Exists ::", exists);
```

- The `fs.existsSync()` method returns `true` if the path exists, `false` otherwise.

## Deleting a Directory

To delete a directory synchronously, use `fs.rmdirSync()`:

```js
// delete a directory
fs.rmdirSync('<path-of-your-directory>'); 
```

- The `fs.rmdirSync()` method removes the specified directory.
- **Note: The directory must be empty to be removed.**

## Summary

The `fs` module provides various methods for interacting with directories in the file system:

- `fs.mkdirSync(path)`: Creates a new directory.
- `fs.readdirSync(path)`: Reads the contents of a directory.
- `fs.existsSync(path)`: Checks if a directory exists.
- `fs.rmdirSync(path)`: Deletes a directory (**directory must be empty**).

These methods allow for synchronous directory operations, ensuring that the program waits for the operation to complete before continuing execution.

> This Markdown document provides clear instructions and code examples for creating, reading, checking the existence of, and deleting directories using the `fs` module in Node.js.