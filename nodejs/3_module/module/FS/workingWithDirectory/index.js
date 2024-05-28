const fs = require('fs');

// creating a new directory
fs.mkdirSync('<name-of-Directory>');

// check the contain of a directory
let folderContent = fs.readdirSync("<path-of-your-directory>")
console.log("Folder Content",folderContent);

// check wheter the directory exists or not
let exists= fs.existsSync("<path-of-your-directory>")
console.log("Exists ::",exists);

//delete a directory
fs.rmdirSync("<path-of-your-directory>"); // To remove the directory the directory must be empty/no files should be there
