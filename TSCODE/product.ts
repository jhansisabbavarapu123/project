import{ Supplier } from './MyClasssupply';
class Customer{
    private sup=new Supplier();
    mysupplier(Proname:string,qty:number,cst:number)
    {
        this.sup.getProduct(Proname,qty,cst)
    }

}
var obj=new Customer()
console.log(obj.mysupplier("laptop",5,24000))