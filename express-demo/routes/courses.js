const express = require('express');
const router = express.Router();
const Joi = require('joi');

const object = [
    {id: 1, name: 'nodejs'},
    {id: 2, name: 'Java'},
    {id: 3, name: 'Angular'}
];


router.get('/', (req, res) => {
    
    res.send(object);
});
 
router.get('/:id', (req, res) => {
    //res.send(req.params.id);
    const id =  req.params.id;
    const course = object.find(o => o.id === parseInt(id));

    if(!course){
        res.status('404').send('Course not found');
    };

    res.send(course);
});

router.post('/', (req, res) => {

    const { error } =  isCourseValid(req.body);

    if(error){
        console.log(error);
        res.status(400).send(error.details[0].message);
        return;
    }

    const newCourse = {
        id: object.length + 1,
        name: req.body.name
    };

    object.push(newCourse);
    res.send(newCourse);
});

router.put('/:id', (req, res) => {
    
    const id = req.params.id;
    const course = object.find(c => c.id === parseInt(id));
    
    if(!course){
        return resp.status(404).send('Course not found');
    };

    const { error } = isCourseValid(req.body);

    if(error){
        console.log(error);
        res.status(400).send(error.details[0].message);
        return;
    }

    course.name = req.body.name;
    return res.send(course);    

});

router.delete('/:id', (req, res) => {

    const id =  parseInt(req.params.id);
    const course = object.find(o => o.id === id);
    
    if(!course){
        return res.status(404).send('Course not found');
    }

    const index = object.indexOf(course);
    console.log(index);
    object.splice(index, 1);

    res.send(object);
});

function isCourseValid(course){

    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);
};

module.exports = router;