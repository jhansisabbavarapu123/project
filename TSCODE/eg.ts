var balance=2000;
interface MessageService{
    SendMesg():string;    
}
interface Transaction{
    credit(amount:number):number;
    debit(amount:number):number;
}
class Customer implements MessageService,Transaction{
    sendMesg():string{
        return("Account is Created");
    }
    credit(amount:number):number{return (balance+amount);}
    debit(amount:number):number{return(balance-amount);}
}
var obj=new Customer();
console.log(obj.sendMesg());
console.log(obj.credit(200));
console.log(obj.debit(200))