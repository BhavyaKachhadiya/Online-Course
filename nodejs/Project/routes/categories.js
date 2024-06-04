const express =require('express')
const {Category,validateData}= require('../models/categories');
const router = express.Router();



router.get('/api/categories', async (req, res) =>{
    let catregories = await Category.find()
    res.send(catregories)
})

router.post('/api/categories',async (req, res) =>{
    const {error} = validateData(req.body);
    if (error) return res.send(error.detail[0].message)
    const catregory = new Category.create({
        name: req.body.name,
    })
    await catregory.save()
    res.send(catregory)
});

router.put('api/categories/:id',async (req, res) =>{
    const {error} = validateData(req.body);
    if (error) return res.send(error.detail[0].message);
    const catregory =await Category.findByIdAndUpdate(req.params.id, {name: req.body.name},{new:true})
    if(!catregory)
    {
        res.status(404).send('The catregory with the given id was not found')
    }
    res.send(catregory)
})

router.delete('api/categories/:id', async (req, res) =>{
    const catregory = await Category.findByIdAndDelete(req.params.id)
    if(!catregory)
    {
        res.status(404).send('The catregory with the given id was not found')
    }
    
    res.send(catregory)
});

router.get('api/categories/:id',async(req,res)=>{
    const catregory = await Category.findById(req.params.id)
    if(!catregory) return res.status(404).send('The catregory not found');
    res.send(catregory)
})

module.exports = router;