
const EventEmitter = require('events');

class Logger extends EventEmitter{

    log (message){

        console.log(`Message ${message}`);

        // Emit an event
        this.emit('messageLogged', {id: 1, url: 'https://test'});

    }


}

module.exports = Logger;
