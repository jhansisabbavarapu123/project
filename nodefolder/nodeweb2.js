var http=require('http');
fs=require('fs');
http.createServer(function(request,response){
    fs.readFile('index.html',function (err,html){
        if(err){
            throw RegExp;
 }
 response.writeHeader(200,{"content-type":"text/html"});
 response.write(html);
 response.end();
    });

}).listen(8088);
console.log("sever started on port:8088 use url as http://localhost:8088")