var fileobj=require("fs");//fs --->is file system
var data=fileobj.readFileSync("test.txt");//open required file
console.log("Before start");
console.log("------------")
console.log(data.toString());
console.log("---------------")
console.log("end of reading");