var balance = 2000;
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.sendMsg = function () {
        return ("Account is Created");
    };
    Customer.prototype.credit = function (amount) { return (balance + amount); };
    Customer.prototype.debit = function (amount) { return (balance - amount); };
    return Customer;
}());
var obj = new Customer();
console.log(obj.sendMsg());
console.log(obj.credit(200));
console.log(obj.debit(200));
