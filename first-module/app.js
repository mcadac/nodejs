

// Use the const type instead of var type, it avoids change memory reference
const loggerModule = require("./loggerModule");
const os = require("os");
const path = require("path");
const fileSystem = require("fs");


loggerModule.log("message from principal module");

var currentPath = path.parse(__filename);

console.log(currentPath);

var totalMemory = os.totalmem();
var freeMemory = os.freemem();


console.log('Total memory : ' + totalMemory);
console.log('Free memory : ' + freeMemory);

console.log(`Total memory without concatenation : ${totalMemory}`);

const files = fileSystem.readdirSync('./');
console.log('Synch method :', files);


const filesAsync = fileSystem.readdir('./', function(error,files){
    if(error){
        console.log('Error', error);
    } else {
        console.log('Result', files);
    }
});




