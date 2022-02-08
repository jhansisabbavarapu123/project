"use strict";
exports.__esModule = true;
exports.Supplier = void 0;
var Supplier = /** @class */ (function () {
    function Supplier() {
    }
    Supplier.prototype.getProduct = function (Proname, qty, cst) {
        this.Productname = Proname;
        this.quantity = qty;
        this.cost = cst;
        this.get();
    };
    Supplier.prototype.get = function () {
        console.log(this.Productname);
        console.log(this.quantity);
        console.log(this.cost);
    };
    return Supplier;
}());
exports.Supplier = Supplier;
