(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "fs"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CsvParser = void 0;
    var fs = require("fs");
    var CsvParser = /** @class */ (function () {
        function CsvParser() {
        }
        CsvParser.printArrayFromTxt = function () {
            var data = fs.readFileSync('../wordlist.txt')
                .toString() // convert Buffer to string
                .split('\n') // split string to lines
                .map(function (e) { return e.trim(); });
            console.log(data.slice(2, 10));
        };
        return CsvParser;
    }());
    exports.CsvParser = CsvParser;
});
//# sourceMappingURL=CsvParser.js.map