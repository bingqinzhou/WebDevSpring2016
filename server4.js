/**
 * Created by bingqinzhou on 3/29/16.
 */
var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/WhiteBoardDB');

app.use(express.static(__dirname + '/practice/mean'));

var CourseSchema = new mongoose.Schema({
    title:String,
    seats:{type:Number,default:25},
    start:{type:Date,default:Date.now}
},{collection:"course"});

var Course = mongoose.model("Course",CourseSchema);

app.get("/rest/course",function(req,res){
    Course.find(function(err,data){
        res.json(data);
    });
});

app.get("rest/course/:id",function(req,res){
    console.log("hello from server");
    Course.find({_id:req.params.id},function(err,data){
       res.json(data);
    });
})
app.listen(3000);

