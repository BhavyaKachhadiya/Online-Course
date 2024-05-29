# CRUD Operations using express

### Step 1: Initialize Your Project

First, initialize your project to create a `package.json` file.

```bash
npm init
```

Follow the prompts to enter information about your project.

### Step 2: Install Express

Install the Express framework:

```bash
npm install express
```

### Step 3: Create Your Express Application

Create a file named `index.js` and add the following code:

#### Import Express and Initialize the Application

```js
const express = require("express");
const app = express();

app.use(express.json());
```

#### Sample Data

```js
let courses = [
  { id: 1, name: "JS" },
  { id: 2, name: "Node" },
  { id: 3, name: "React" },
];
```

#### Routes

1. **Read All Courses**

```js
app.get("/courses", (req, res) => {
  res.send(courses);
});
```

2. **Create a New Course**

```js
app.post("/courses", (req, res) => {
  const course = { id: courses.length + 1, name: req.body.name };
  courses.push(course);
  res.send(course);
});
```

3. **Update a Course by Name**

```js
app.put("/courses/:coursename", (req, res) => {
  const course = courses.find(
    (course) => course.name === req.params.coursename
  );
  if (!course) {
    return res.status(404).send("The course with the given name was not found");
  }
  course.name = req.body.name;
  res.send(course);
});
```

4. **Delete a Course by Name**

```js
app.delete("/courses/name/:coursename", (req, res) => {
  const course = courses.find((course) => course.name === req.params.coursename);
  if (!course) {
    return res.status(404).send("The course with the given name was not found");
  }
  courses = courses.filter((course) => course.name !== req.params.coursename);
  res.send(courses);
});
```

5. **Delete a Course by ID**

```js
app.delete("/courses/id/:id", (req, res) => {
  const course = courses.find((course) => course.id === parseInt(req.params.id));
  if (!course) {
    return res.status(404).send("The course with the given id was not found");
  }
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(courses);
});
```

### Step 4: Start the Server

```js
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
```

> By following these steps, you can create a full-featured Express application that handles creating, reading, updating, and deleting courses.