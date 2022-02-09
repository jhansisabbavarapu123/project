var express = require('express');
var app = express();
app.get('/index1.html',function(req,res){//this is used to load webpage
    res.sendFile(__dirname + "/" + "index1.html");
    })
    app.get('/callMe',function(req,res){//acss parameters from query string
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(req.quary.first_name+"<br>");
        response={
            fname:req.query.first_name,
            lname:req.quary.last_name
        };
        console.log(respose);//prepare output inJSON format
        res.end(JSON.stringify(response));

    })
    var server=app.listen(8081,function(){
        var port=server.address().port
        console.log("Example app listening at http://localhost:%s",port)
    })
    