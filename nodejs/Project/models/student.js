const Joi= require('Joi');
const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name: {type: String, required: true},
    enrolled: {type: Boolean, required: false},
    phone: {type: String, required:true}
});

const Student = new mongoose.model('Student', studentSchema)

function validateData(student){
    const schema={
        name:Joi.string().min(3).required(),
        phone:Joi.string().required(),
        enrolled:Joi.boolean().required()
    }
    return Joi.validate(student,schema)
}


exports.Student = Student;
exports.validateData = validateData;

