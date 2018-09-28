

//notice the convention: First letter of everyword is capitalized, this indicates it's a class
const EventEmitter = require('events');

//create an instance of the class
const emitter = new EventEmitter();


//register a listener and use arrow function to simplify (ES6)
emitter.on("messageLogged",(args) => {
    console.log("Listener Called",args);
});



//raise and event
emitter.emit("messageLogged",[1,2121,3]);