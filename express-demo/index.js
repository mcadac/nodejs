/**
* @author milo
*/  
const express = require('express');
const app = express();

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
    res.send([1,2,3]);
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

// Read an envirotment variable
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));