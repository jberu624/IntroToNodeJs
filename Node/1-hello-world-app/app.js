


function SayHello(name) {
    console.log("Hello " + name + "!!");
    
    //this will throw an exception since window is not an object in node
    //console.log(window);
}

console.log(window);

SayHello("Jorge");