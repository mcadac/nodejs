/**
* @author milo
*/  
const logger = require('./middleware/logger.js');
const debug = require('debug')('app:startup');
const Joi = require('joi');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const config = require('config');
const courses = require('./routes/courses');
const home = require('./routes/home');
const app = express();


//This line is necessary to enable Json 
app.use(express.json());
app.use(logger);
app.use(express.static('public'));
app.use(helmet());
app.use('/api/courses', courses);
app.use('/', home);


//Template Engines
app.set('view engine', 'pug');
app.set('views', './views');

console.log(`Application name : ${config.get('name')}`);
console.log(`Application name : ${config.get('email.host')}`);

if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    console.log('Morgan enable...');
    debug('Debug log message...');
}

debug('Test log message...');


app.get('/api/posts/:name/:month', (req, res) => {
    //res.send(req.params);
    res.send(req.query);
});


// Read an envirotment variable
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));