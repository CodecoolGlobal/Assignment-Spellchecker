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
    var data = new HashTable_1.HashTable();
    data.convertToHashTable();
    console.log(data.getItem("a"));
    console.log(data.getItem("accept"));
    console.log(data.getItem("venom"));
});
//# sourceMappingURL=App.js.map