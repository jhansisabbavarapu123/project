"use strict";
exports.__esModule = true;
exports.UserLogin = void 0;
var UserLogin = /** @class */ (function () {
    function UserLogin() {
    }
    UserLogin.prototype.login = function (uname, pword) {
        this.username = uname;
        this.password = pword;
        return this.validate();
    };
    UserLogin.prototype.validate = function () {
        if (this.username == "admin" && this.password == "admin") {
            console.log("valid user");
            return "valid user";
        }
        else {
            console.log("validation failed");
            return "invalid user credentials";
        }
    };
    return UserLogin;
}());
exports.UserLogin = UserLogin;
