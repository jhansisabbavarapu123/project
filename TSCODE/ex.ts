class Student{
    protected student_name:string;
    protected slno:number;
    display(name1:string,slno:number):void{
        this.student_name=name1;
        console.log("student name is:"+this.student_name)
        this.slno=slno;
        console.log("student number is:"+this.slno)

    }
}
class Course extends Student 
{
   cousename:String;
 view(slno:number,name1:string,coname:string):void{
        this.display(slno,name1);
        console.log("course name is: "+coname);
        
    }
}
var obj2 = new Course();
obj2.store("Jhansi",203,"eee");
obj2.display();
