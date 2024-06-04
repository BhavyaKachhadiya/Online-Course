const express = require('express')
const categories = require('./routes/categories')
const student = require('./routes/student')
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://127.0.0.1/project')
.then(()=> console.log('Connected to MongoDB'))
.catch(err=> console.log('Error connecting to MongoDB',err));
app.use(express.json())
app.use(categories)
app.use(student)


app.listen(3000)