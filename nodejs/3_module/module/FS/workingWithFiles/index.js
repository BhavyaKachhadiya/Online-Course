const fs = require('fs');

// create a file 
let fileContent = fs.readFileSync('1file.txt');
console.log("Data of file :: "+fileContent);

// write the file
fs.writeFileSync('2file.txt',"<content-of-your-file>")

//append the file
fs.appendFileSync('3file.txt', "<content-of-your-file>")

// delete the file
fs.unlinkSync('4file.txt')