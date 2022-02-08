var Employee = /** @class */ (function () {
    function Employee() {
        console.log("Employee is Ready");
    }
    Employee.prototype.store = function (name, id, job) {
        this.empname = name;
        this.empid = id;
        this.empjob = job;
    };
    Employee.prototype.display = function () {
        console.log(this.empname + " " + this.empid + " " + this.empjob);
    };
    return Employee;
}());
var obj = new Employee();
obj.store("Jhansi", 203, "Developer");
obj.display();
