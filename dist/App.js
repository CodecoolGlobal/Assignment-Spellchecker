(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./utils/HashTable", "./utils/UserInputReader"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HashTable_1 = require("./utils/HashTable");
    var UserInputReader_1 = require("./utils/UserInputReader");
    // CsvParser.parseDataToArray();
    // const betterStringHasher = new BetterStringHasher().hash('dupa');
    // const lousyStringHasher = new LousyStringHasher().hash('dupa');
    // const degenerateStringHasher = new DegenerateStringHasher().hash('dupa');
    //
    // console.log(betterStringHasher);
    // console.log(lousyStringHasher);
    // console.log(degenerateStringHasher);
    function main() {
        var userInput = new UserInputReader_1.UserInputReader();
        userInput.getInput();
        console.log('test');
        var data = new HashTable_1.HashTable();
        data.convertToHashTable();
        // userInput.getInput();
        console.log(data.getItem("a"));
        console.log(data.getItem("accept"));
        console.log(data.getItem("venom"));
        console.log(data.lookup("venom"));
    }
    main();
});
//# sourceMappingURL=App.js.map