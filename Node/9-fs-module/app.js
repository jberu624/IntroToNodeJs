//almost all operations come in blocking and non-bloacking flavors
//you should always use non-blocking 

const fs = require("fs");


const files = fs.readdirSync("./");
console.log(files);

fs.readdir("./", function (error, filesAsync) 
{  
    console.log(filesAsync);
});

fs.readdir("./sdfasdf", (error, filesAsync) =>
{  
    if(error){
        console.log("Error happened");
    }else
    console.log(filesAsync);
});