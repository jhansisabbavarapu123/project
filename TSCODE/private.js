var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.store = function (name, sal) {
        this.pname = name;
        this.salary = sal;
    };
    Person.prototype.view = function () {
        console.log(this.pname + " " + this.salary);
    };
    return Person;
}());
var obj = new Person();
obj.store("Jhansi", 21000);
obj.view();
