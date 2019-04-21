
const EventEmitter = require('events');
const Logger = require('./logger');
const logger = new Logger();

// Create a listener
logger.on('messageLogged', (args) => {
    console.log('Listener processing message', args);
});

logger.log('@Milo');




