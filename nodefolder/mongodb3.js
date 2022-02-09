var MongoClient = require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";
MongoClient.connect(url,{useNewUrlParser:true},function(err,db){
    if (err) throw err;
    var dbo=db.db("mydb");
    var myobj=[
        {empid:'E101', empname:'Madhu', job:'Executive', address:'Madhapur'},
        {empid:'E102', empname:'Jhansi', job:'clerk', address:'vizianagaram'}, 
        {empid:'E103', empname:'santoshi', job:'clerk', address:'viziag'}
     ];                                                                  //column structure
    dbo.collection("employee").insertMany(myobj,function(err,res){
        if(err) throw err
            console.log("Number of documentts inserted" +res.insertedCount);
            db.close();
    
    });
});