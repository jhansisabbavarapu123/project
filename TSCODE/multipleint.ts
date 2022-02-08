interface MessageService{
    sendMesg():string;
}
interface Calculator{
    addition(x:number,y:number):number;
}
class MessageHandler implements MessageService,Calculator{
    sendMesg():string{
        return("Welcome to All");
    }
addition(x:number,y:number):number{return(x+y);}
}
var handler=new MessageHandler();
console.log(handler.sendMesg())
console.log(handler.addition(10,20))