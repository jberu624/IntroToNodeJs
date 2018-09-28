

//Every file in a node application is considered a module
//variables and functions defined in a file are scoped to that module

//this is a function scoped to this module
//if we were using a browsers this would be a problem. 
//the problem here is that if another file contains a function named the same the one loaded first will be overwritten 
var sayHello = function(){

    console.log("Hi from sayHello() function")
};

sayHello();


//let's log the this module object
//console.log(module);