const express = require("express");
const app = express();

app.use(express.json());

let courses = [
  { id: 1, name: "JS" },
  { id: 2, name: "Node" },
  { id: 3, name: "React" },
];

// Read all courses
app.get("/courses", (req, res) => {
  res.send(courses);
});

// Create a new course
app.post("/courses", (req, res) => {
  const course = { id: courses.length + 1, name: req.body.name };
  courses.push(course);
  res.send(course);
});

// Update a course by name
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

// Delete a course by name
app.delete("/courses/name/:coursename", (req, res) => {
  const course = courses.find((course) => course.name === req.params.coursename);
  if (!course) {
    return res.status(404).send("The course with the given name was not found");
  }
  courses = courses.filter((course) => course.name !== req.params.coursename);
  res.send(courses);
});

// Delete a course by id
app.delete("/courses/id/:id", (req, res) => {
  const course = courses.find((course) => course.id === parseInt(req.params.id));
  if (!course) {
    return res.status(404).send("The course with the given id was not found");
  }
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(courses);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));