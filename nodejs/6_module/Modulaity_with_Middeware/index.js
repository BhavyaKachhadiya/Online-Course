const express = require('express');
const myMiddeware = require('./middewares/middleware');
const myMiddeware2 = require('./middewares/middleware2');
const app = express();

app.use(myMiddeware);
app.use(myMiddeware2);

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.listen(3000);