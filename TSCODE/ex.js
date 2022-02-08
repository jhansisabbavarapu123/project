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
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.display = function (student_name, slno) {
        this.student_name = name1;
        console.log("student name is:" + this.sname);
        this.slno = slno;
        console.log("student number is:" + this.slno);
    };
    return Student;
}());
var Course = /** @class */ (function (_super) {
    __extends(Course, _super);
    function Course() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Course.prototype.view = function (sino, name1, coname) {
        this.show(sino, name1);
        console.log("course name is: " + this.coname);
    };
    return Course;
}(Student));
var obj2 = new Course();
obj2.display("Jhansi", 203, "React");
