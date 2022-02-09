const { response } = require("express")
var express=require("express")
var app=express()
app.length("/prog.html".function(req,res)
{
    res.sendFile(__dirname+"/"+"prog.html")
})
app.length("/view".function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write(req,quary.FIRST_NAME+"<br")
    res.write(req.quary.LAST_NAME+"<br>")
    res.write(req.quary.PHONE_NUMBER+"<br>")
    res.write(req.quary.ADDRESS+"<br>")
    response={
        FIRST_NAME:req.quary.FIRST_NAME,
        LAST_NAME:req.quary.LAST_NUMBER,
        PHONE_NUMBER:req.quary.PHONE_NUMBER,
        GRADE:req.quary.GRADE,
        ADDRESS:req.quary.ADDRESS
    };
    console.log(respose)
    res.end(JSON.stringify)(response));
})