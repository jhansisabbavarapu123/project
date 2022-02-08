var MyCons1 = /** @class */ (function () {
    function MyCons1() {
        console.log("object initialized");
    }
    MyCons1.prototype.sendNumber = function () {
        return "12345678";
    };
    return MyCons1;
}());
var mycons1 = new MyCons1();
console.log(mycons1.sendNumber());
