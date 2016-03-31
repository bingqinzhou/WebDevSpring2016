/**
 * Created by bingqinzhou on 3/27/16.
 */
var express = require('express');
var app = express();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cs5610');

//console.log(mongoose);

var CourseSchema = new mongoose.Schema({
    title:String,
    seats:{type:Number,default:25},
    starts:{type:Date,default:Date.now}
},{collection: "course"});

var Course = mongoose.model("Course",CourseSchema);

function createCourse(course){
    Course.create(course, function(err,results){
            console.log(err);
            console.log(results);
        });
}

/**
function findByTitle(title){
    Course.find({title: title}, function(err,results){
        console.log(results);
    });

}
 */

function findByTitle(title,callback){
    Course.find({title:title}, callback);
}

//findByTitle("Course 4");

findByTitle("Course 3", renderCourses);

/**
var courses = [
    {title:"Course 1", seats: 11},
    {title:"Course 2", seats: 22},
    {title:"Course 3", seats: 33},
    {title:"Course 4", seats: 44}
]

for(var c in courses){
    createCourse(courses[c]);
}
 */

function findAll(callback){
    Course.find(callback);
}

//findAll(renderCourses);

function renderCourses(err,results){
    console.log(err);
    for(var r in results){
        var title = results[r].title;
        var seats = results[r].seats;
        console.log([title,seats]);
    }
}

app.get('/rest/course', function(req, res){
    findAll(function(err,results){
        res.json(results);
    });
});

app.listen(3000);