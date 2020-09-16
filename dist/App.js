(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./utils/CsvParser", "./WordChecker"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CsvParser_1 = require("./utils/CsvParser");
    // CsvParser.parseDataToArray();
    // const betterStringHasher = new BetterStringHasher().hash('dupa');
    // const lousyStringHasher = new LousyStringHasher().hash('dupa');
    // const degenerateStringHasher = new DegenerateStringHasher().hash('dupa');
    //
    // console.log(betterStringHasher);
    // console.log(lousyStringHasher);
    // console.log(degenerateStringHasher);
    // let data = new HashTable();
    // data.convertToHashTable();
    //
    console.log(data.getItem("a"));
    console.log(data.getItem("accept"));
    console.log(data.getItem("venom"));
    console.log(data.lookup("venom"));
    var WordChecker_1 = require("./WordChecker");
    var list = CsvParser_1.CsvParser.parseDataToArray();
    var wordchecker = new WordChecker_1.WordChecker(list);
    console.log(wordchecker.checkInsertingLetterInEachPositionOfTheString("acept"));
});
//# sourceMappingURL=App.js.map