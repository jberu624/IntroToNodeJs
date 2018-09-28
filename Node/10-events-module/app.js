
//notice the convention: First letter of everyword is capitalized, this indicates it's a class
const EventEmitter = require('events');

//create an instance of the class
const emitter = new EventEmitter();


//register a listener
emitter.on("messageLogged",function(){
    console.log("Listener Called");
});

//raise and event
emitter.emit("messageLogged");