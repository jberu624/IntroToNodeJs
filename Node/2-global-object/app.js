

//console object accessible from any module/file and part of the global scope
console.log("Hi from global object"); //global

// setTimeout()
// setInterval()
// clearTimeout();

var message = "Global message variable";

//console.log(window.message);

//window and document objects do not exist
//window.document.body = "HI";

//global variables are not added to the global object
//message is only scoped to app.js
console.log(global.message);

//we tipically use the short hand instead of prefixing with it with global.
global.console.log("Hi again");


