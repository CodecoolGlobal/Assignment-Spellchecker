(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WordChecker = void 0;
    var WordChecker = /** @class */ (function () {
        function WordChecker(listOfWords) {
            this.alphabet = "ABCDEFGHIJKLMNOPQRSTVWXYZ";
            this.listOfWords = listOfWords;
        }
        WordChecker.prototype.checkInsertingLetterInEachPositionOfTheString = function (word) {
            var suggestions = [];
            for (var position = 0; position < word.length; position++) {
                for (var i = 0; i < this.alphabet.length; i++) {
                    var suggestion = ''; //StringBuffer stringBuffer = new StringBuffer;
                    suggestion = [word.slice(0, position), this.alphabet[i].toLowerCase(), word.slice(position)].join('');
                    if (this.listOfWords.includes(suggestion) && !suggestions.includes(suggestion)) {
                        suggestions.push(suggestion);
                    }
                }
            }
            return suggestions;
        };
        WordChecker.prototype.checkReplacingEachLetterWithAnother = function (word, suggestions) {
            for (var position = 0; position < word.length; position++) {
                for (var i = 0; i < this.alphabet.length; i++) {
                    var suggestionArray = [];
                    suggestionArray.splice(position, 0, this.alphabet[i]);
                    var suggestion = suggestionArray.toString();
                    if (!suggestions.includes(suggestion)) {
                        suggestions.push(word);
                    }
                }
            }
        };
        return WordChecker;
    }());
    exports.WordChecker = WordChecker;
});
//# sourceMappingURL=WordChecker.js.map