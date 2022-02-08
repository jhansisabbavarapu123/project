var MessageHandler = /** @class */ (function () {
    function MessageHandler() {
    }
    MessageHandler.prototype.sendMesg = function () {
        return ("Welcome to All");
    };
    return MessageHandler;
}());
var handler = new MessageHandler();
console.log(handler.sendMesg());
