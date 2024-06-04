const express = require("express");
const { Course, validateCourse } = require("../models/course.js");
const {Category} = require("../models/categories.js")
const router = express.Router();
const mongoose = require("mongoose");

router.get("/api/courses", async (req, res) => {
  let courses = await Course.find();
  res.send(courses);
});

router.post("/api/courses", async (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) return res.send(error.detail[0].message);

  const category = Category.findById(req.body.categoryid);
  if(!category) return res.send("Invalid ID").status(400)

  const course = new Course.create({
    title: req.body.title,
    category: {
      _id: category._id,
      name: category.name
    },
    creator: req.body.creator,
    rating: req.body.rating,
  });
  course = await course.save();
  res.send(course);
});

router.put("/api/courses/:id", async (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) return res.send(error.detail[0].message);

  const category = Category.findById(req.body.categoryid);
  if(!category) return res.send("Invalid ID").status(400)

  const course = await Course.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      category: {
        _id: category._id,
        name: category.name
      },
      creator: req.body.creator,
      rating: req.body.rating,
    },
    { new: true }
  );

  if (!course)
    return res.status(404).send("The Course with the given ID was not found!");
  res.send(course);
});

router.delete("/api/courses/:id", async (req, res) => {
  const course = await Course.findByIdAndDelete(req.params.id);
  if (!course)
    return res.status(404).send("The Course with the given ID was not found!");
  res.send(course);
});

router.get("/api/courses/:id", async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course)
    return res.status(404).send("The Course with the given ID was not found!");
  res.send(course);
});
