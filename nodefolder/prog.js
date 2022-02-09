var express = require("express");
var app = express();
app.get("/prog.html",function(req,res)
{                                        //this is used to load webpage
 res.sendFile(__dirname + "/" + "prog.html"); 
})
    app.get("/view",function(req,res)  //acss parameters from query string
    {  
    res.writeHead(200,{"Content-Type":"text/html"});
        res.write(req.query.first_name+"<br>");
        res.write(req.query.last_name+"<br>");
        res.write(req.query.Address+"<br");
        res.write(req.query.Grade+"<br>");
        response={
            First_Name:req.query.first_name,
            Last_Name:req.query.last_name,
            Adress:req.query.Address,
            Grade:req.query.Grade
        };
        console.log(response);//prepare output inJSON format
        res.end(JSON.stringify(response));
    })
    var server=app.listen(8081,function(){
        var port=server.address().port
        console.log("Example app listening at http://localhost:%s/prog.html",port)
    })