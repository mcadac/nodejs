/**
* @author milo
*/  
const logger = require('./logger.js');
const Joi = require('joi');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();


//This line is necessary to enable Json 
app.use(express.json());
app.use(logger);
app.use(express.static('public'));
app.use(helmet());
app.use(morgan('tiny'));


const object = [
    {id: 1, name: 'nodejs'},
    {id: 2, name: 'Java'},
    {id: 3, name: 'Angular'}
];

app.get('/', (req, res) => {
    console.log('Testing nodemon');
    res.send('Milo code!');
});

app.get('/api/courses', (req, res) => {
    
    res.send(object);
});
 
app.get('/api/courses/:id', (req, res) => {
    //res.send(req.params.id);
    const id =  req.params.id;
    const course = object.find(o => o.id === parseInt(id));

    if(!course){
        res.status('404').send('Course not found');
    };

    res.send(course);
});

app.get('/api/posts/:name/:month', (req, res) => {
    //res.send(req.params);
    res.send(req.query);
});

app.post('/api/courses', (req, res) => {

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

app.put('/api/courses/:id', (req, res) => {
    
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

app.delete('/api/courses/:id', (req, res) => {

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

// Read an envirotment variable
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));