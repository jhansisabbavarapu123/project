var ClassCons1 = /** @class */ (function () {
    function ClassCons1(data) {
        console.log("Constructor ready to use");
        this.show(data);
    }
    ClassCons1.prototype.show = function (data) {
        console.log('Welcome .....' + data);
    };
    ClassCons1.hello = function () { console.log("test"); };
    return ClassCons1;
}());
var cc = new ClassCons1('Jhansi');
ClassCons1.hello();
