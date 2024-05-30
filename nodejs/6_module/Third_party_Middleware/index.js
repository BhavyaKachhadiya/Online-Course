const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan("tiny"))
app.get('/', function(req, res) {
    res.send('Hello World');
});

app.listen(3000);