# Express Node

https://www.npmjs.com/package/express

## How to read params and response with an object

```
app.get('/api/courses/:id', (req, res) => {
    //res.send(req.params.id);
    const id =  req.params.id;
    const course = object.find(o => o.id === parseInt(id));

    if(!course){
        res.status('404').send('Course not found');
    };

    res.send(course);
});
```




