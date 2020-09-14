(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./utils/CsvParser"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CsvParser_1 = require("./utils/CsvParser");
    CsvParser_1.CsvParser.printArrayFromTxt();
});
//# sourceMappingURL=App.js.map