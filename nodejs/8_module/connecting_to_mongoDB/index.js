const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/dbname')
.then(()=> console.log('Connected to MongoDB'))
.catch(err=> console.log('Error connecting to MongoDB',err));