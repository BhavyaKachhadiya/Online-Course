# File System Operations with `fs` Module

The `fs` module in Node.js provides an API for interacting with the file system, allowing for reading, writing, appending, and deleting files.

## Reading a File

To read the contents of a file synchronously, use `fs.readFileSync()`:

```js
const fs = require('fs');

let fileContent = fs.readFileSync('1file.txt', 'utf8');
console.log("Data of file :: " + fileContent);
```

- The `fs.readFileSync()` method reads the entire contents of a file.
- The second argument specifies the encoding (`'utf8'`), so the returned content is a string.

## Writing to a File

To write data to a file synchronously, use `fs.writeFileSync()`:

```js
fs.writeFileSync('2file.txt', "<content-of-your-file>");
```

- The `fs.writeFileSync()` method writes data to a file, replacing the file if it already exists.
- If the file does not exist, it is created.

## Appending to a File

To append data to a file synchronously, use `fs.appendFileSync()`:

```js
fs.appendFileSync('3file.txt', "<content-of-your-file>");
```

- The `fs.appendFileSync()` method appends data to a file. 
- If the file does not exist, it is created.

## Deleting a File

To delete a file synchronously, use `fs.unlinkSync()`:

```js
fs.unlinkSync('4file.txt');
```

- The `fs.unlinkSync()` method deletes the specified file.

## Summary

The `fs` module provides various methods for interacting with the file system:

- `fs.readFileSync(path, encoding)`: Reads the contents of a file.
- `fs.writeFileSync(path, data)`: Writes data to a file.
- `fs.appendFileSync(path, data)`: Appends data to a file.
- `fs.unlinkSync(path)`: Deletes a file.

These methods allow for synchronous file operations, ensuring that the program waits for the file operation to complete before continuing execution.

> This Markdown document provides clear instructions and code examples for reading, writing, appending, and deleting files using the `fs` module in Node.js.