"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie() {
    }
    Movie.prototype.viewData = function (mname, hro, heo) {
        this.moviename = mname;
        this.hero = hro;
        this.heroine = heo;
        this.view();
    };
    Movie.prototype.view = function () {
        console.log(this.moviename);
        console.log(this.hero);
        console.log(this.heroine);
    };
    return Movie;
}());
exports.Movie = Movie;
