

console.log(__filename);
console.log(__dirname);

//This variable is private
var  url = 'http://test.log.com';


//This function is private
function log(message){

    console.log(message);

}

//This allow that functions and variables are going to be publics
module.exports.log = log;
module.exports.url = url;





