interface MessageService{
    sendMesg():string;
}
class MessageHandler implements MessageService{
    sendMesg():string{
        return("Welcome to All");
    }
}
var handler=new MessageHandler();
console.log(handler.sendMesg())