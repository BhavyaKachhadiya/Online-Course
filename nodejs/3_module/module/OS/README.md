# Node.js `os` Module

The `os` module in Node.js provides operating system-related utility methods and properties.

## Methods and Their Usage

### `os.arch()`

Returns the operating system CPU architecture.

- **Windows OS**: `x64` or `x32`
- **Mac OS**: `arm64`

```js
const os = require('os');
console.log(os.arch()); // Example output: x64
```

### `os.platform()`

Returns the platform Node.js is running on.

- **Windows OS**: `win32`
- **Mac OS**: `darwin`

```js
console.log(os.platform()); // Example output: win32
```

### `os.networkInterfaces()`

Returns an object containing network interfaces that have been assigned a network address.

```js
console.log(os.networkInterfaces()); 
// Example output: 
// {
//   lo: [
//     { address: '127.0.0.1', netmask: '255.0.0.0', family: 'IPv4', mac: '00:00:00:00:00:00', internal: true },
//     { address: '::1', netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff', family: 'IPv6', mac: '00:00:00:00:00:00', internal: true }
//   ],
//   eth0: [
//     { address: '192.168.1.101', netmask: '255.255.255.0', family: 'IPv4', mac: 'de:ad:be:ef:ca:fe', internal: false },
//     { address: 'fe80::1c1b:0:0:1/64', netmask: 'ffff:ffff:ffff:ffff::', family: 'IPv6', mac: 'de:ad:be:ef:ca:fe', internal: false }
//   ]
// }
```

### `os.cpus()`

Returns an array of objects containing information about each logical CPU core.

```js
console.log(os.cpus()); 
// Example output: 
// [
//   {
//     model: 'Intel(R) Core(TM) i7-7700HQ CPU @ 2.80GHz',
//     speed: 2808,
//     times: {
//       user: 3647522,
//       nice: 0,
//       sys: 2080416,
//       idle: 11117144,
//       irq: 0
//     }
//   },
//   ...
// ]
```

### `os.totalmem()`

Returns the total amount of system memory in bytes as an integer.

```js
console.log(os.totalmem()); // Example output: 8589934592
```

### `os.freemem()`

Returns the amount of free system memory in bytes as an integer.

```js
console.log(os.freemem()); // Example output: 2481721344
```

## Summary

The `os` module provides valuable methods for retrieving information about the operating system, including architecture, platform, network interfaces, CPU details, total memory, and free memory.

Using this module, developers can create applications that are aware of and can react to the environment they are running in.


> This Markdown document explains how to use the `os` module in Node.js to gather information about the operating system, with code examples and expected outputs for each method.
