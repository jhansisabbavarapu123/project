//sorting data
var MongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017/";
MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbo=db.db("mydb");
    //var mysort={address:"Hyderabad"};
    dbo.collection("employee").find().sort("empname",-1).toArray(function(err,result){
        if (err) throw err;
        console.log(result);
        db.close();
    });
});