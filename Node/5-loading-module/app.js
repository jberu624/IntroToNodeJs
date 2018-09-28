

//we don't need to specify .js since node assumes it's a javascript file
var logger = require("./logger");

logger.log("Hi from logger module!!!");

//we can also reference the function directly
const loggerFunc = require("./logger").log;

loggerFunc("Hi from logger module again!!!");

