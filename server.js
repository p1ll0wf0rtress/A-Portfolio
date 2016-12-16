// var express = require('express');

// //express stuff
// var app = express();

// app.use(express.static(__dirname + '/'));

// app.get('/', function (req, res){
// 	res.send('hello world');
// });

// app.listen(3000);

// console.log("Server is running at localhost:3000");


'use strict';

// simple express server
var express = require('express');
var app = express();
var router = express.Router();

app.use(express.static('public'));
app.get('/', function(req, res) {
    res.sendfile('./public/index.html');
});

app.listen(5000);
