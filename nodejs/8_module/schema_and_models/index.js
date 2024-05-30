const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1/dbname")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB", err));

// Schema

const courseSchema = new mongoose.Schema({
  name: String,
  creator: String,
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  rating: Number,
});

// Model
const Course = mongoose.model("Course", courseSchema);
async function createCourse() {
  const course = new Course.create({
    name: "Javascript",
    creator: "Bhavya",
    isPublished: true,
    rating: 4.5,
  });

  const result = await course.save();
  console.log(result);
}

createCourse();

async function getAllCourse() {
  const course = await Course.find({ creator: "Bhavya" }).select({ name: 1 });
  console.log(course);
}

getAllCourse();

async function getRatingCourse() {
  const course = await Course.find({ rating: { $gte: 4 } });
  console.log(course);
}

getRatingCourse();

async function updateCourse(id) {
  let course = await Course.findById(id);

  if (!course) {
    return res.status(404).send("The course with the given id was not found");
  }

  course.name= "Python"
const updateCourse = await course.save();

console.log(updateCourse);
}

updateCourse(); //TODO: you have to put your own id

async function deleleteCourse(id) {
    let course = await Course.findByIdAndDelete(id);
    console.log(course);
}

deleleteCourse(); // TODO: you have to put your own id