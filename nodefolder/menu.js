var express=require('express');
var app=express();
//Main menu block
app.get('/home',function(req,res){
    res.write("<a href='first'>first</a>||<a href='second'>Next</a>");
    res.end("<hr>");
})
//First link
app.get('/first',function(req,res){
    res.writeHeader(200,{"Content-Type":"text/html"});
    res.write("<br/>Hi...")
    res.end("<a href=home>back</a>");
})
//Net link
app.get('/second',function(req,res){
    res.writeHeader(200,{"Content-Type":"text/html"});
    res.write('welcome to all');
    res.write("<a href=home>back</a>");
})
// startup proxy with port
var server = app.listen(8081, function () {
   var host = server.address().host
   var port = server.address().port
   console.log("Example app listening at http://localhost:%s/home",port)
})