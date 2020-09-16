(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./CsvParser"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HashTable = void 0;
    var CsvParser_1 = require("./CsvParser");
    var HashTable = /** @class */ (function () {
        function HashTable(hasher) {
            this.hashedTable = [];
            this.data = CsvParser_1.CsvParser.parseDataToArray();
            this.hasher = hasher;
        }
        HashTable.prototype.setItem = function (key, value) {
            this.hashedTable[key] = value;
        };
        HashTable.prototype.getItemByKey = function (key) {
            return this.hashedTable[key];
        };
        HashTable.prototype.convertToHashTable = function () {
            for (var i = 0; i < this.data.length; i++) {
                var hashedWord = this.hasher.hash(this.data[i]);
                this.setItem(hashedWord, this.data[i]);
            }
        };
        HashTable.prototype.removeItem = function (word) {
            this.data.splice(this.hashedTable.indexOf(word), 1);
        };
        HashTable.prototype.lookup = function (word) {
            return this.hashedTable.includes(word);
        };
        return HashTable;
    }());
    exports.HashTable = HashTable;
});
//# sourceMappingURL=HashTable.js.map