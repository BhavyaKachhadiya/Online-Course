const express = require('express');

const app = express();

app.use(function(req, res,next) {
    console.log("I am a Middleware");
    next();
});
app.use(function(req, res,next) {
    console.log("I am a second Middleware");
    next();
});

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.listen(3000);