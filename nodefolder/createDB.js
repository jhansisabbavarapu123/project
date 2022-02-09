var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
MongoClient.connect(url,{userNewUrlParser:true},function(er,db){
    if(err){
        console.log("error in connecting database please verify your URL:"+url)
        //throw err;
    }
else{
    console.log("Data base created");
}
});