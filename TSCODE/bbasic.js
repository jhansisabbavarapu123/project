var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.view = function () {
        console.log("hello....");
    };
    return MyClass;
}());
var obj = new MyClass();
obj.view();
