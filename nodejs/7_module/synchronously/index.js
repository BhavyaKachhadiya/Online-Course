const fs = require('fs');

let data = fs.readFileSync('file1.txt', 'utf8');

console.log(data);