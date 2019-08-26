# Express Node

https://www.npmjs.com/package/express

## Express configuration
- Enable Json in express
```
//This line is necessary to enable Json 
app.use(express.json());
```

## Node package used with express
- For input validations
```
npm install joi
```

## Middleware
- A Middlewar is a function executed in the pipeline process between a request and a response 
- For example the express.json() function
- We can create a Middleware with the next fuction definition
```
express.use(expressObj.json());
express.use(expressObj.urlencoded({ extended: true }));
express.use(expressObj.static('foler-name'))
express.use(
    function(req,res,next){
        console.log('Any process here');
        //This line is so important to continue with the pipeline process and others middleware
        next();
    }

);
```
- Thrid-party middleware

```
node i helmet //Help with security headers
node i morgan //Help to log request message information

const helmet = require('helemt');
const morgan = require('morgan');

app.use(helmet());
app.use(morgan('tiny'));

```

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





