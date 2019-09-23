const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Testing nodemon');
    //res.send('Milo code!');
    res.render('index', {title: 'Express aplication', message: ''});
});

module.exports = router;