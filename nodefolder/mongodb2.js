//inserting record to your table
var MongoClient = require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";
MongoClient.connect(url,{useNewUrlParser:true},function(err,db){
    if (err) throw err;
    var dbo=db.db("my db");
    var myobj={empid:"E101",empname:'Madhu',job:'Manager',adess:"Madhapur"};//column structure
    dbo.collection("employee").insertOne(myobj,function(err,res){
        if(err){
            console.log("Unable to insert record");
            throw err;
        }
        else{
            console.log("1document inserted");}
            db.close();
    
    });
});