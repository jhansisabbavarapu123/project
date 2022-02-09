var express = require('express');
var app = express();
app.get('/jhansi.html',function(req,res) {             //this is used to load webpage
 res.sendFile(__dirname + "/" + "jhansi.html");
    })
    app.get('/view',function(req,res)  //acss parameters from query string
    {  
    res.writeHead(200,{'Content-Type':'text/html'});
        res.write(req.query.first_Name+"<br>");
        res.write(req.query.last_Name+"<br>");
        res.write(req.query.E_mail+"<br>");
        res.write(req.query.Password+"<br>");
        res.write(req.query.date+"<br>");
        res.write(req.query.gn+"<br>");
        res.write(req.query.Address+"<br>");
        res.write(req.query.Education+"<br>");
        res.write(req.query.Grade+"<br>");
        response={
            first_Name:req.query.first_Name,
            last_Name:req.query.last_Name,
            E_mail:req.query.E_mail,
            password:req.query.Password,
            date:req.query.date,
            Gender:req.query.gn,
            Adderss:req.query.Address,
            Education:req.query.Education,
            Grade:req.query.Grade
        };
        console.log(response);//prepare output inJSON format
        res.end(JSON.stringify(response));
    })
    var server=app.listen(8081,function(){
        var port=server.address().port
        console.log("Example app listening at http://localhost:%s",port)
    })
