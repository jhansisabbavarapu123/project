var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false})
app.get('/login.com',function(req,res){
    res.sendFile(__dirname + "/" + "loginForm.html");
    })
    app.post('/data',urlencodedParser,function(req,res){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(req.body.uname+"<br>");
        response={
            username:req.body.uname
        };
        console.log(response);
        res.end(JSON.stringify(response));
    })
    var server = app.listen(8081,function(){
        var port = server.address().port
        console.log("Example app listening at http://localhost:%s/login.com",port)
})