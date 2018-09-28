
//Lets go to Nodejs.org

//Path contains a bunch of utility functions

const path = require('path');

//we'll use __filename which is passed to the module
var pathObj = path.parse(__filename);

console.log(pathObj);


var pathArray = "foo/bar/baz".split(path.sep);

console.log(pathArray);