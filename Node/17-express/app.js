const Joi = require("joi");

//install express npm i express
const express = require('express');

const app = express();

//adding a piece of middleware request processing pipeline
app.use(express.json());

const courses = [
    {id:1, name:'Course 1'},
    {id:2, name:'Course 2'},
    {id:3, name:'Course 3'},
    {id:4, name:'Course 4'}
];

//app.get();
//app.post();
//app.put();
//app.delete();

//here we define a route and a callback handler/route handler
app.get("/", (req, res)=>{
    res.send("Hello World!!!");
});

//here you would return the courses from the database
app.get("/api/courses", (req,res)=>{
    res.send(courses);
});

//here you would return the courses from the database
app.get("/api/posts/:year/:month", (req,res)=>{
    res.send(req.params);
});



//here you would return the courses from the database
app.get("/api/students/:year", (req,res)=>{
    res.send(req.query);
});

//here you would return the courses from the database
app.get("/api/courses/:id", (req,res)=>{
    
    let course = courses.find(c=> c.id === parseInt(req.params.id));
    
    if(!course) {
        return res.status(404).send("The course with the given id was not found");
    } 

    res.send(course);
});


//POST

app.post("/api/courses", (req,res)=>{

    if(!req.body.name || req.body.name.length < 3){
        //400 bad request
       return  res.status(400).send('Name is required and should be a minimum of 3 charactes');
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);

    res.send(course);

});


//PUT

//here you would return the courses from the database
app.put("/api/courses/:id", (req,res)=>{
    
    let course = courses.find(c=> c.id === parseInt(req.params.id));
    
    if(!course) {
        return res.status(404).send("The course with the given id was not found");
    }
    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);

    if(result.error){
        return res.status(400).send(result.error);
    }

    course.name = req.body.name;
    res.send(course);
});



//here you would return the courses from the database
app.delete("/api/courses/:id", (req,res)=>{
    
    let course = courses.find(c=> c.id === parseInt(req.params.id));
    
    if(!course) {
      return  res.status(404).send("The course with the given id was not found");
    }

    const index = courses.indexOf(course);
    courses.splice(index,1);


    res.send(course);


});



//environment variable
const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listening on port ${port}`));

//npm i nodemon
