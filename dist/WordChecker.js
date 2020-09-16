var WordChecker = /** @class */ (function () {
    function WordChecker(listOfWords) {
        // listOfWords: Array<string> = new ListOfWords;
        this.alphabet = "ABCDEFGHIJKLMNOPQRSTVWXYZ";
        // this.listOfWords = listOfWords
    }
    WordChecker.prototype.checkInsertingLetterInEachPositionOfTheString = function (word, suggestions) {
        for (var position = 0; position < word.length; position++) {
            for (var i = 0; i < this.alphabet.length; i++) {
                var suggestion = ''; //StringBuffer stringBuffer = new StringBuffer;
                suggestion = [word.slice(0, position), this.alphabet[i], word.slice(position)].join('');
                // suggestion.splice(position, 0, this.alphabet[i]); //stringBuffer.insert(position,this.alphabet[i]
                // const suggestion = suggestionArray.toString();
                if (!suggestions.includes(suggestion)) {
                    suggestions.push(suggestion);
                }
            }
        }
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
//# sourceMappingURL=WordChecker.js.map