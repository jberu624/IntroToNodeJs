
//notice the convention: First letter of everyword is capitalized, this indicates it's a class
const EventEmitter = require('events');

//creating a class that inherits from EventEmitter
class Logger extends EventEmitter{

     log(message){
        console.log(message);
    
        //raise and event
        this.emit("messageLogged", {id:1, url:"http://www.google.com"});
    }
}


//exposing the Logger class
module.exports = Logger;