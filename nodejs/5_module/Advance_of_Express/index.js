const express = require('express')
const app = express()

app.get('/', (req, res) =>{
  res.send('Hello World')
})

app.get('/about', (req, res) =>{
  res.send('About description here')
})

// Single Routing 
app.get('/user/:id', (req, res) =>{
    res.send(req.params.id)
})

// Multiple Routing
const courses = [
    {id:1, name: 'JS'},
    {id:2, name: 'Node'},
    {id:3, name: 'React'}
]

// get a course From ID
app.get('/courses/:id', (req, res) =>{
    let course = courses.find(course => course.id === parseInt(req.params.id))
    res.send(course);

    if(!course)
    {
        res.status(404).send('The course with the given id was not found')
    }
    
})

// get a course From Name
app.get('/courses/:name', (req, res) =>{
    let course = courses.find(course => course.name === req.params.name)
    res.send(course);
    if(!course)
    {
        res.status(404).send('The course with the given name was not found')
    }
})

const port= process.env.PORT||3000
app.listen(port,()=> console.log(`listening on port on ${port}`))