var fsobj=require("fs");
//Asynchronous read
console.log("Before Reading");
console.log("----------------")
fsobj.readFile('test.txt',function(err,data){
    if(err){
        console.log("File not found");
        //return console.error(err);
    }
    else{
        console.log(data.toString());
    }
});
console.log("---------------")
console,log("Program Ended");