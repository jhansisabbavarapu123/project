class Employee{
   private empname:string;
private empid:number;
private empjob:string
constructor(){
    console.log("Employee is Ready");
}
store(name:string,id:number,job:string):void{
    this.empname=name;
    this.empid=id;
    this.empjob=job;

}

    display():void{
        console.log(this.empname+" "+this.empid+" "+this.empjob);
    }
}
var obj=new Employee();
obj.store("Jhansi",203,"Developer");
obj.display();