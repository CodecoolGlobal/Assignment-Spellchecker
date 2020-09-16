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
    exports.SpellChecker = void 0;
    var CsvParser_1 = require("./CsvParser");
    var filepath = 'wordlist.txt';
    var SpellChecker = /** @class */ (function () {
        function SpellChecker() {
            this.fileParser = new CsvParser_1.CsvParser();
            // this.wordsList = this.fileParser.parse();// put correct method
        }
        SpellChecker.prototype.findByCharDeleting = function (word, wordsList) {
            var replacement = [];
            var newWord;
            for (var i = 0; i < word.length; i++) {
                newWord = word.substring(0, i) + word.substring(i + 1);
                if (wordsList.has(newWord)) {
                    replacement.push(newWord);
                }
            }
            return replacement;
        };
        SpellChecker.prototype.findByCharsSwapping = function (word, wordsList) {
            var replacement = [];
            var newWord;
            for (var i = 0; i < word.length; i += 2) {
                var firstLettertoSwap = word.substring(i, i + 1);
                var secondLetterToSwap = word.substring(i + 1, i + 2);
                newWord = word.substring(0, i) + secondLetterToSwap + firstLettertoSwap + word.substring(i + 2);
                if (wordsList.has(newWord)) {
                    replacement.push(newWord);
                }
                if (replacement.length > 3) {
                    break;
                }
            }
            for (var i = 1; i < word.length; i += 2) {
                var firstLetterToSwap = word.substring(i, i + 1);
                var secondLetterToSwap = word.substring(i + 1, i + 2);
                newWord = word.substring(0, i) + secondLetterToSwap + firstLetterToSwap + word.substring(i + 2);
                if (wordsList.has(newWord)) {
                    replacement.push(newWord);
                }
                if (replacement.length > 3) {
                    break;
                }
            }
            return replacement;
        };
        return SpellChecker;
    }());
    exports.SpellChecker = SpellChecker;
});
//# sourceMappingURL=SpellChecker.js.map