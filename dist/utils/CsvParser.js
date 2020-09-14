(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CsvParser = void 0;
    var CsvParser;
    (function (CsvParser) {
        function printArrayFromTxt() {
            var fs = require('fs');
            var data = fs.readFileSync('../wordlist.txt')
                .toString() // convert Buffer to string
                .split('\n') // split string to lines
                .map(function (e) { return e.trim(); });
            console.log(data.slice(2, 10));
        }
        CsvParser.printArrayFromTxt = printArrayFromTxt;
    })(CsvParser = exports.CsvParser || (exports.CsvParser = {}));
});
//# sourceMappingURL=CsvParser.js.map