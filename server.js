/**change on Mar 23rd*/

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var multer = require('multer');

var mongoose = require('mongoose');

var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var bcrypt = require('bcrypt-nodejs');

//var connectionString = 'mongodb://localhost/FormBuilderDB';

//var connectionString_project = 'mongodb://localhost/MovieAppDB';

var connectionString = 'mongodb://localhost/CS5610DB';

if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
    connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
        process.env.OPENSHIFT_APP_NAME;
}


var db = mongoose.connect(connectionString);

//var db_project = mongoose.createConnection(connectionString_project);

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());

app.use(session({
    secret: 'this is the secret',
    resave:true,
    saveUninitialized:true
}));

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

require("./public/app.js")(app,db,mongoose,bcrypt);
//require("./public/project/server/app.js")(app,db_project,mongoose);


var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ipaddress);

