class MyCons1{
    constructor(){
        console.log("object initialized");
    }
    sendNumber():string{
        return "12345678";
    }
}
var mycons1=new MyCons1();
console.log(mycons1.sendNumber())