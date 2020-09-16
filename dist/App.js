(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./hashers/BetterStringHasher", "./utils/HashTable"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BetterStringHasher_1 = require("./hashers/BetterStringHasher");
    var HashTable_1 = require("./utils/HashTable");
    var hush = new BetterStringHasher_1.BetterStringHasher();
    var data = new HashTable_1.HashTable(hush);
    data.convertToHashTable();
    console.log(hush.hash("accept"), data.getItemByKey(6917062944));
    console.log(hush.hash("a"), data.getItemByKey(97));
    console.log(data.lookup("venom"));
});
// console.log(data.getItem("accept"));
// console.log(data.getItem("venom"));
// console.log(data.lookup("venom"));
//# sourceMappingURL=App.js.map