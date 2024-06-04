const mongoose = require('mongoose');
const Joi = require('Joi');

const categorySchema = mongoose.Schema({
    name: {type: String, required: true},
});

const Category = new mongoose.model('Category', categorySchema)


function validateData(catregory){
    const schema={
        name:Joi.string().min(3).required()
    }
    return Joi.validate(catregory,schema)
}

exports.Category = Category;
exports.categorySchema = categorySchema;
exports.validateData = validateData;