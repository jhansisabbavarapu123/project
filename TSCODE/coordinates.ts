class Shape{​​​​​​  private x:number;
      private y:number; 
     store(x_axis :number, y_axis:number):void{​​​​​​ 
             this.x=x_axis;  
             this.y=y_axis;  }​​​​​​ 
          view():void{​​​​​​   
         console.log("X coordinate:"+this.x+", y coordinate= "+this.y)  }​​​​​​}​​​​​​
class Circle extends Shape{​​​​​​   
 private rad:number;  
 storeCircle(x_axis :number, y_axis:number, r:number):void{​​​​​​   
    super.store(x_axis,y_axis) ;    
    this.rad=r;    }​​​​​​ 
    view():void{​​​​​​     
    super.view();     
    console.log("Radius="+this.rad);     
}​​​​​​}
​​​​​​class Box extends Shape{​​​​​​  
     private w:number;  
     private h:number;  
 storeBox(x_axis :number, y_axis:number, wi:number,hi:number):void{​​​​​​  
    super.store(x_axis,y_axis) ;    
    this.w=wi;    
    this.h=hi;    }​​​​​​
    view():void{​​​​​​    
   super.view();    
console.log("Width="+this.w+" , Height="+this.h);     
  }​​​​​​}​​​​​​
var Circle=new Circle();
var Box=new Box();



    