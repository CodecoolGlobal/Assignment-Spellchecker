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
        function HashTable() {
            var length = CsvParser_1.CsvParser.parseDataToArray().length;
            this.table = new Array(length);
            this.data = CsvParser_1.CsvParser.parseDataToArray();
        }
        HashTable.prototype.setItem = function (key, value) {
            var index = hashKeyToIndexNumber(key, this.table.length);
            this.table[index] = value;
        };
        HashTable.prototype.getItem = function (key) {
            var index = hashKeyToIndexNumber(key, this.table.length);
            return this.table[index];
        };
        HashTable.prototype.convertToHashTable = function (hasher) {
            for (var i = 0; i < this.data.length; i++) {
                var hashedWord = hasher.hash(this.data[i]);
                this.setItem(this.data[i], hashedWord);
            }
        };
        HashTable.prototype.removeItem = function (word) {
            this.data.splice(this.data.indexOf(word), 1);
        };
        HashTable.prototype.lookup = function (word) {
            return this.data.includes(word);
        };
        return HashTable;
    }());
    exports.HashTable = HashTable;
    function hashKeyToIndexNumber(word, tableSize) {
        var hash = 3;
        for (var i = 0; i < word.length; i++) {
            hash = hash * word.charCodeAt(i) % tableSize;
        }
        return hash;
    }
});
//# sourceMappingURL=HashTable.js.map