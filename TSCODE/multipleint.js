var MessageHandler = /** @class */ (function () {
    function MessageHandler() {
    }
    MessageHandler.prototype.sendMesg = function () {
        return ("Welcome to All");
    };
    MessageHandler.prototype.addition = function (x, y) { return (x + y); };
    return MessageHandler;
}());
var handler = new MessageHandler();
console.log(handler.sendMesg());
console.log(handler.addition(10, 20));
