var MongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017/";
MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbo=db.db("mydb");
    var myquery={empid:"E102"};
    dbo.collection("employee").deleteOne(myquery,newvalues,function(err,res){
        if (err) throw err;
        console.log("1 document updated");
        db.console();
    });
});