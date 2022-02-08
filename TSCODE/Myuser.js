"use strict";
exports.__esModule = true;
var MyClassTest_1 = require("./MyClassTest");
var User = /** @class */ (function () {
    function User() {
        this.log = new MyClassTest_1.UserLogin();
    }
    User.prototype.mylogin = function (uname, pword) {
        return this.log.login(uname, pword);
    };
    return User;
}());
var u = new User();
console.log(u.mylogin("user", "user"));
