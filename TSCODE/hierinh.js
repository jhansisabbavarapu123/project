var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var First = /** @class */ (function () {
    function First() {
    }
    First.prototype.inputData = function (f, s) {
        this.first = f;
        this.second = s;
    };
    return First;
}());
var Addition = /** @class */ (function (_super) {
    __extends(Addition, _super);
    function Addition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Addition.prototype.addNums = function () {
        return (this.first + this.second);
    };
    return Addition;
}(First));
var Multiplication = /** @class */ (function (_super) {
    __extends(Multiplication, _super);
    function Multiplication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Multiplication.prototype.multiply = function () {
        return (this.first * this.second);
    };
    return Multiplication;
}(First));
var adding = new Addition();
var multiply = new Multiplication();
adding.inputData(10, 30);
console.log("Sum=" + adding.addNums());
multiply.inputData(34, 27);
console.log(multiply.multiply());
console.log(adding instanceof Multiplication);
