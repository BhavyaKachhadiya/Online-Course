const Joi = require("Joi");
const mongoose = require("mongoose");
const { categorySchema } = require("../models/categories");
const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      trim: true,
    },
    category: {
      type: categorySchema,
      required: true
    },
    creator: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
  })
);
function validateCourse(course) {
  const schema = {
    title: Joi.string().min(5).max(255).required(),
    category: Joi.string().required(),
    creator: Joi.string().required(),
    rating: Joi.number().min(1).max(5).required(),
  };
  return Joi.validate(course, schema);
}

exports.Course = Course;
exports.validateCourse = validateCourse;
