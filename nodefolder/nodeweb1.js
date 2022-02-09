var http=require('http');//loads http module
http.createServer(
    function(request,respose){
response.writeHead(200,{ 'Content-Type':'text/html'});
 response.write(
            "<html><head><title>Testing Page</title></head>"+
            "<body><h1>Hi All</h1></body></html>");
            Response.write("<br><a href=http://www.gmail.com>gmail</a>");
            Response.end('<br>Hello!world');
 }).listen(8081);
console.log('server running at http://127.0.0.1:8081/');