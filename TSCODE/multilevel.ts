class Student{​​​​​​   
     private id:number;
    private name:string;
    protected storeStudent(st_id:number,st_name:string):void{​​​​​​  
    this.id=st_id;      
    this.name=st_name;  
  }​​​​​​  
  public viewData():void{​​​​​​   
    console.log(this.id+'  '+this.name); 
   }​​​​​​}
 ​​​​​​class Marks extends Student{​​​​​​  
     protected sub1:number;  
     protected sub2:number;  
     public storeDetails(st_id:number,st_name:string,st_sub1:number,st_sub2:number):void{​​​​​​   
   this.storeStudent(st_id,st_name);     
  this.sub1=st_sub1;  
   this.sub2=st_sub2;   }​​​​​​  
    public viewData():void{​​​​​​         /* function override is done here, override is the concept of redefine funtion        as that of that the parent by signature providng new functionalities */     
     super.viewData();      // in order to connect parent function under child area   
    console.log('Sub1='+this.sub1+'  sub2='+this.sub2);  
 }​​​​​​}​​​​​​
export class Result extends Marks{​​​​​​private total:number;private avr:number;
    public viewData():void{​​​​​​    
     super.viewData();    
     this.total=this.sub1+this.sub2;
     this.avr=this.total/2.0; 
     console.log('Total='+this.total+'  average='+this.avr);  
 }​​​​​​ }​​​​​​var res= new Result();
res.storeDetails(101,'Anjani',56,67);
res.viewData();
