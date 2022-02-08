"use strict";
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
exports.__esModule = true;
exports.Result = void 0;
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.storeStudent = function (st_id, st_name) {
        this.id = st_id;
        this.name = st_name;
    };
    Student.prototype.viewData = function () {
        console.log(this.id + '  ' + this.name);
    };
    return Student;
}());
var Marks = /** @class */ (function (_super) {
    __extends(Marks, _super);
    function Marks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Marks.prototype.storeDetails = function (st_id, st_name, st_sub1, st_sub2) {
        this.storeStudent(st_id, st_name);
        this.sub1 = st_sub1;
        this.sub2 = st_sub2;
    };
    Marks.prototype.viewData = function () {
        _super.prototype.viewData.call(this); // in order to connect parent function under child area   
        console.log('Sub1=' + this.sub1 + '  sub2=' + this.sub2);
    };
    return Marks;
}(Student));
var Result = /** @class */ (function (_super) {
    __extends(Result, _super);
    function Result() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Result.prototype.viewData = function () {
        _super.prototype.viewData.call(this);
        this.total = this.sub1 + this.sub2;
        this.avr = this.total / 2.0;
        console.log('Total=' + this.total + '  average=' + this.avr);
    };
    return Result;
}(Marks));
exports.Result = Result;
var res = new Result();
res.storeDetails(101, 'Anjani', 56, 67);
res.viewData();
