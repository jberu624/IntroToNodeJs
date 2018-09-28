


const Logger = require("./logger");
const logger = new Logger();

//register a listener
logger.on("messageLogged",function(){
    console.log("Listener Called");
});

logger.log("Message");