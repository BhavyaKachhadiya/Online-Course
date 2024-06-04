const express =require('express')
const {Student,validateData} = require('../models/student');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/api/student', async (req, res) =>{
    let student = await Student.find();
    res.send(student)
})

router.post('/api/students',async (req, res) =>{
    const {error} = validateData(req.body);
    if (error) return res.send(error.detail[0].message)
    const student = new Student.create({
        name: req.body.name,
        enrolled: req.body.enrolled,
        phone: req.body.phone
    })
    await student.save()
    res.send(student)
});

router.put('api/student/:id',async (req, res) =>{
    const {error} = validateData(req.body);
    if (error) return res.send(error.detail[0].message);
    const student =await Student.findByIdAndUpdate(req.params.id, {name: req.body.name,enrolled:req.body.enrolled,phone: req.body.phone},{new:true})
    if(!student)
    {
        res.status(404).send('The student with the given id was not found')
    }
    res.send(student)
})

router.delete('api/student/:id', async (req, res) =>{
    const student = await Student.findByIdAndDelete(req.params.id)
    if(!student)
    {
        res.status(404).send('The student with the given id was not found')
    }
    
    res.send(student)
});

router.get('api/student/:id',async(req,res)=>{
    const student = await Student.findById(req.params.id)
    if(!student) return res.status(404).send('The student not found');
    res.send(student)
})


module.exports = router;