var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var port = 3000;

app.get('/',function(req,res){
	res.send("Hello from Njanfang...");
});

app.listen(port,function(){
	console.log("server is running on port " + port);
});