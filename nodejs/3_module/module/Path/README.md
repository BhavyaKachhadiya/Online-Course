
# Node.js `path` Module and Special Variables

The `path` module provides utilities for working with file and directory paths. In addition, Node.js provides special variables `__filename` and `__dirname` to get the current module's filename and directory name, respectively.

## `path` Module

### `path.extname(path)`

Returns the extension of the path, from the last occurrence of the `.` (dot) character to the end of the string in the last portion of the path.

```js
const path = require('path');

console.log(path.extname("/path/to/your/file.txt")); // Example output: .txt
```

### `path.basename(path)`

Returns the last portion of a path, similar to the Unix `basename` command. This function returns the file name including extension.

```js
console.log(path.basename("/path/to/your/file.txt")); // Example output: file.txt
```

## Special Variables

### `__filename`

The `__filename` variable contains the absolute path of the file being executed.

```js
console.log(__filename); // Example output: /path/to/your/current/file.js
```

### `__dirname`

The `__dirname` variable contains the directory name of the current module. It is the same as the path given by `path.dirname(__filename)`.

```js
console.log(__dirname); // Example output: /path/to/your/current
```

## Summary

- The `path` module provides utilities for handling and transforming file paths.
  - `path.extname(path)`: Returns the file extension.
  - `path.basename(path)`: Returns the base name of the file.
- `__filename` and `__dirname` are special variables that provide the absolute path of the current module and its directory, respectively.

These utilities and variables are essential for file system navigation and manipulation in Node.js applications.

This document provides a clear explanation of how to use the `path` module to get file extensions and base names, and how to use the special variables `__filename` and `__dirname` to get the current file and directory paths.