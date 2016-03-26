/**
 * Created by bingqinzhou on 3/12/16.
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());

require("./public/assignment/server/app.js")(app);

/**
app.get('/getJsonArray',function(req,res){
    var array = [{title:"java"},{title:"C#"}];
    res.send(array);
});


var courses = [

    {title:"Java 101",seats:23,start: new Date()},
    {title:"C# 101",seats:34,start: new Date(2015,9,4)},
    {title:"Node.js 101",seats:50,start: new Date(2017,1,15)}

];

app.put("/rest/course/:id",function(req,res){
    var index = req.params["id"];
    var course = req.body;
    courses[index].title = course.title;
    courses[index].seats = course.seats;
    courses[index].start = course.start;
    res.json(courses);

})

app.post("/rest/course", function(req,res)
{
    var course = req.body;
    courses.push(course);
    res.json(courses);

})


app.get("/rest/course/:id", function(req,res)
{
    var index = req.params["id"];
    res.json(courses[index]);

})

app.delete("/rest/course/:id", function(req,res)
{
    var index = req.params["id"];
    courses.splice(index,1);
    res.json(courses);

})

//use course instead of courses is just a representation convention
app.get("/rest/course",function(req,res)
{
    res.json(courses);
})

*/


app.listen(3000);
