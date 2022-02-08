"use strict";
exports.__esModule = true;
var MyClasssupply_1 = require("./MyClasssupply");
var Customer = /** @class */ (function () {
    function Customer() {
        this.sup = new MyClasssupply_1.Supplier();
    }
    Customer.prototype.mysupplier = function (Proname, qty, cst) {
        return this.sup.getProduct(Proname, qty, cst);
    };
    return Customer;
}());
var obj = new Customer();
console.log(obj.mysupplier("laptop", 5, 24000));
