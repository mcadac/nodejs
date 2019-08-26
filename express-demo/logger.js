
function log(req, res, next){
    console.log('Logger middleware');
    next();
}

module.exports = log;