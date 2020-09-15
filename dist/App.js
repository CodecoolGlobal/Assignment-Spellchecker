(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./utils/CsvParser", "./hashers/BetterStringHasher", "./hashers/LousyStringHasher", "./hashers/DegenerateStringHasher"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CsvParser_1 = require("./utils/CsvParser");
    var BetterStringHasher_1 = require("./hashers/BetterStringHasher");
    var LousyStringHasher_1 = require("./hashers/LousyStringHasher");
    var DegenerateStringHasher_1 = require("./hashers/DegenerateStringHasher");
    CsvParser_1.CsvParser.printArrayFromTxt();
    var betterStringHasher = new BetterStringHasher_1.BetterStringHasher().hash('dupa');
    var lousyStringHasher = new LousyStringHasher_1.LousyStringHasher().hash('dupa');
    var degenerateStringHasher = new DegenerateStringHasher_1.DegenerateStringHasher().hash('dupa');
    console.log(betterStringHasher);
    console.log(lousyStringHasher);
    console.log(degenerateStringHasher);
});
//# sourceMappingURL=App.js.map