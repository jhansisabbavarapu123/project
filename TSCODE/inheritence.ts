class Parent{
    protected parent_name:string;
    show(pname:string):void{
        this.parent_name=pname;
        console.log('parent name is ' + this.parent_name);
    }
}
class Child extends Parent{
    private child_name:string;
    callChild(pname:string,cname:string):void{
        this.parent_name=pname;
        this.show(pname);
        this.child_name=cname;
        console.log('child name is ' + this.child_name);
        
    }
}
var ch = new Child();
ch.callChild("one","two");