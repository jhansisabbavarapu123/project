class First{
    protected first:number;
    protected second:number;
    inputData(f:number,s:number){
        this.first=f;
        this.second=s;
    }
}
class Addition extends First{
    addNums():number{
        return(this.first+this.second);
    }
}
class Multiplication extends First{
    multiply():number{
        return(this.first*this.second);
    }
}
var adding=new Addition();
var multiply=new Multiplication();
adding.inputData(10,30);
console.log("Sum="+adding.addNums());
multiply.inputData(34,27);
console.log(multiply.multiply())
console.log(adding instanceof Multiplication)