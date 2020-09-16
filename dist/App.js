(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./utils/HashTable"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HashTable_1 = require("./utils/HashTable");
    // CsvParser.parseDataToArray();
    // const betterStringHasher = new BetterStringHasher().hash('dupa');
    // const lousyStringHasher = new LousyStringHasher().hash('dupa');
    // const degenerateStringHasher = new DegenerateStringHasher().hash('dupa');
    //
    // console.log(betterStringHasher);
    // console.log(lousyStringHasher);
    // console.log(degenerateStringHasher);
    var data = new HashTable_1.HashTable();
    data.convertToHashTable();
    console.log(data.getItem("a"));
    console.log(data.getItem("accept"));
    console.log(data.getItem("venom"));
    console.log(data.lookup("venom"));
});
//# sourceMappingURL=App.js.map