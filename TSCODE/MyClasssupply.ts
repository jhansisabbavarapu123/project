export class Supplier{
    private Productname:string;
    private quantity:number;
    private cost:number;
    getProduct(Proname:string,qty:number,cst:number):void{
        this.Productname=Proname;
        this.quantity=qty;
        this.cost=cst;
        this.get()
    }

 private get():void{
     console.log(this.Productname)
     console.log(this.quantity)
     console.log(this.cost)
 }
}