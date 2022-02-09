var express = require('express');  // invoking express module
var app = express();        // activate resource
app.get('/', function (req, res) {
    res.send('Hello World from default');
 })
var server = app.listen(8081, function () {  
   var port = server.address().port
   console.log("Example app listening at http://localhost:%s", port)
})