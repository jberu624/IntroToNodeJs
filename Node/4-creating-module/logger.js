

function log(message){
    console.log(message);
}


//here we can expose the log function with a different name
module.exports.log = log;


console.log(module);