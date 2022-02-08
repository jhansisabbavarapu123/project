class Person{
    private pname:string;
    private pword:12345;
    private salary:number;
    store(name:string,sal:number,pword:number):void{
        this.pname=name;
        this.salary=sal;
        this.pword=pword;
    }
    view():void{
        console.log(this.pname+" "+this.salary);
    }
}var obj=new Person();
obj.store("Jhansi",21000);
obj.view();