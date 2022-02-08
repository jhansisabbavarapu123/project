interface Info{
    message:string,
    sendMesg():string;
}
var invitation:Info={
    message:"Welcome to my Birthday event",
    sendMesg:function(){
        return "hii...";
    }
}
console.log(invitation.message);
console.log(invitation.sendMesg());