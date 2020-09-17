class WordChecker {
    constructor(listOfWords) {
        this.alphabet = "abcdefghijklmnopqrstuvwxyz";
        this.listOfWords = listOfWords;
    }
    checkInsertingLetterInEachPositionOfTheString(word) {
        const suggestions = [];
        for (let position = 0; position < word.length; position++) {
            for (let i = 0; i < this.alphabet.length; i++) {
                let suggestion = ''; //StringBuffer stringBuffer = new StringBuffer;
                suggestion = [word.slice(0, position), this.alphabet[i], word.slice(position)].join('');
                if (this.listOfWords.includes(suggestion) && !suggestions.includes(suggestion)) {
                    suggestions.push(suggestion);
                }
            }
        }
        return suggestions;
    }
    checkReplacingEachLetterWithAnother(word) {
        const suggestions = [];
        for (let position = 0; position < word.length; position++) {
            for (let i = 0; i < this.alphabet.length; i++) {
                let suggestion = ''; //StringBuffer stringBuffer = new StringBuffer;
                suggestion = word.substr(0, position) + this.alphabet[i] + word.substr(position + 1, word.length);
                if (this.listOfWords.includes(suggestion) && !suggestions.includes(suggestion)) {
                    suggestions.push(suggestion);
                }
            }
        }
        return suggestions;
    }
}
//# sourceMappingURL=WordChecker.js.map