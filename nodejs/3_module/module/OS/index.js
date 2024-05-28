const os = require('os');

console.log(os.arch()); // For Windows OS (x64 or x32), For Mac OS (arm64)

console.log(os.platform()); // For Windows OS (win32), For Mac OS (darwin)

console.log(os.networkInterfaces()); // Returns an object containing network interfaces that have been assigned a network address.

console.log(os.cpus()); // Returns an array of objects containing information about each logical CPU core. The array will be empty if no CPU information is available, such as if the/proc file system is unavailable.

console.log(os.totalmem()); //Returns the total amount of system memory in bytes as an integer

console.log(os.freemem()); // Returns the total amount of system memory in bytes as an integer