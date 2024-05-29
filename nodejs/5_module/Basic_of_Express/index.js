const express = require('express')
const app = express()

app.get('/', (req, res) =>{
  res.send('Hello World')
})

app.get('/about', (req, res) =>{
  res.send('About description here')
})

app.listen(3000,()=> console.log('listening on port on 3000'))