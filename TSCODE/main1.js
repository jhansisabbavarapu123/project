"use strict";
exports.__esModule = true;
var MyClassmoive_1 = require("./MyClassmoive");
var Audience = /** @class */ (function () {
    function Audience() {
        this.mov = new MyClassmoive_1.Movie();
    }
    Audience.prototype.mymovie = function (mname, hro, heo) {
        return this.mov.viewData(mname, hro, heo);
    };
    return Audience;
}());
var obj = new Audience();
console.log(obj.mymovie("Bangaram", "PavanKalyan", "Asin"));
