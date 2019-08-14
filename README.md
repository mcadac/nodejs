# NodeJS 

NodeJS is a runtime environment to execute JavaScript code outside of the browser. It is used frecuently to build backend services or Application programming interfaces

NodeJS engine is developed in C++ using the JavaScript engine V8 from Google.

No-blocking and asynchronous application... Node applications are asynch by default. This has a event queue that is monitoring by the thread. For these reasons **Node Applications are ideal for I/O itensive apps.**

**Do not use NodeJS for CPU-intensive applications.**

In Node, we don’t have browser environment objects such as window or the
document object. Instead, we have other objects that are not available in
browsers, such as objects for working with the file system, network, operating
system, etc. 

In NodeJS not exist **window** global object instead of we can to use **global**
```
global.console.log
global.setTimeout
```

## Module wrapper function

When we create a module NodeJS wrapper it in a function with the next signature:

```
function(exports, require, module, __filename, __dirname)

```
The wrapper functions allow us to use exports, require and module objects or components in our modules, for instance:
 
 ```
 console.log(__filename);
 console.log(__dirname);
 module.exports.log = log;
 exports.log = log;
 
 //We cannot do it, because it change teh memory refenrece  
 exports = log;
 ```

## Async Functions

The Async functions have a callBack argument that work with a function, this function is going to be execute when the async process response with the result.
For instance:

```
const filesAsync = fileSystem.readdir('./', function(error,files){
    if(error){
        console.log('Error', error);
    } else {
        console.log('Result', files);
    }
});
```

**Arrow functions**

```

// Without arrow function
emitter.on('messageLogged', function (args){
    console.log('Listener processing message', args);
});


// With arrow function
emitter.on('messageLogged', (args) => {
    console.log('Listener processing message', args);
});

```

## Events

- This a core concept of NodeJS. In fact a lot of Node's core functionality is based on this concept.
- An event is basically a signal that indicate that something has happened in our application.
- The nOde module to manage events is **events** **EventEmitter**

```
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Create a listener
emitter.on('messageLogged', function () {
    console.log('Listener processing message');
});


// Emit an event
emitter.emit('messageLogged');
```

## Classes 

- We can define a class in NodeJS like the next example. When we define the methods is not necessary use the key word **function**.
```
const EventEmitter = require('events');

class Logger extends EventEmitter{

    log (message){

        console.log(`Message ${message}`);

        // Emit an event
        this.emit('messageLogged', {id: 1, url: 'https://test'});

    }


}

module.exports = Logger;

```

## NPM package manager

- **Package.json**: This has information about your application such as it's name, it's version, it's entrypoint it'sdependencies an etc.

- To init
```
npm init
```

- To find Node package you can look for it in https://www.npmjs.com
```
npm install underscore
```

## Code recommendations

- If you use Intellij IDEA, you can enable NodeJS completion assistant
```
intellij > preferences > NodeJs and Npm > enable coding assintance for NodeJs option
```

- We can install the next component to check our JS code or the jshint online tool
```
npm install jshint
```

- When you import a module, it is better to save it in a **const** variable type and not save it in **var**.
This avoid to change memory reference and get an runtime exception.

```
const newModule = require('....');
var newModule = require('....');
```

- From ES6 / ES2015 ECMAScript 6 (It is a specification that defines what features are available in JS) 
we can use Template string, this allows us build a string without concatenation 

```
var myName = 'Milo';
console.log(`Welcome ${myName}`);
```
