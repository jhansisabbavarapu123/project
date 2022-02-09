var express = require('express');
var add = express();
add.get("/",function(req,res)
{
res.get('/addition.html',function(req,res)
{
    res.sendFile(__dirname + "/" + "addition.html")
})
    add.get('/data',function(req,res)
    {
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(req.query.fnumber+"<br>");
        res.write(req.query.snumber+"<br>")
        FIRST_NUMBER=parseInt(req.query.fnumber)
        SECOND_NUMBER=parseInt(req.query.snumber)
        var total=FIRST_NUMBER+SECOND_NUMBER
        res.write("sum="+total)
            response={
            FIRST_NAME:req.query.fnumber,
            SECOND_NAME:req.query.snumber
        };
        console.log(response);
        res.end(JSON.stringify(response));
    })
})
    var server = add.listen(8081,function()
    {
        var port = server.address().port
        console.log("Example app listening at http://localhost:%s/",port)
    })