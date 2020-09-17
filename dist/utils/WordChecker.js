export class WordChecker {
    constructor(listOfWords) {
        this.alphabet = "abcdefghijklmnopqrstuvwxyz";
        this._listOfWords = listOfWords;
    }
    get listOfWords() {
        return this._listOfWords;
    }
    checkInsertingLetterInEachPositionOfTheString(word) {
        const suggestions = [];
        for (let position = 0; position < word.length; position++) {
            for (let i = 0; i < this.alphabet.length; i++) {
                let suggestion = ''; //StringBuffer stringBuffer = new StringBuffer;
                suggestion = [word.slice(0, position), this.alphabet[i], word.slice(position)].join('');
                if (this._listOfWords.includes(suggestion) && !suggestions.includes(suggestion)) {
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
                if (this._listOfWords.includes(suggestion) && !suggestions.includes(suggestion)) {
                    suggestions.push(suggestion);
                }
            }
        }
        return suggestions;
    }
    findByCharsSwapping(word) {
        let suggestions = [];
        let newWord;
        for (let i = 0; i < word.length; i += 2) {
            const firstLettertoSwap = word.substring(i, i + 1); //s
            const secondLetterToSwap = word.substring(i + 1, i + 2); //w
            newWord = word.substring(0, i) + secondLetterToSwap + firstLettertoSwap + word.substr(i + 2, word.length);
            if (this._listOfWords.includes(newWord) && !suggestions.includes(newWord)) {
                suggestions.push(newWord);
            }
            if (suggestions.length > 3) {
                break;
            }
        }
        for (let i = 1; i < word.length; i += 2) {
            const firstLetterToSwap = word.substring(i, i + 1);
            const secondLetterToSwap = word.substring(i + 1, i + 2);
            newWord = word.substring(0, i) + secondLetterToSwap + firstLetterToSwap + word.substr(i + 2, word.length);
            if (this._listOfWords.includes(newWord) && !suggestions.includes(newWord)) {
                suggestions.push(newWord);
            }
            if (suggestions.length > 3) {
                break;
            }
        }
        return suggestions;
    }
    findByCharDeleting(word) {
        const suggestions = [];
        let newWord;
        for (let i = 0; i < word.length; i++) {
            newWord = word.substr(0, i) + word.substr(i + 1, word.length);
            if (this._listOfWords.includes(newWord) && !suggestions.includes(newWord)) {
                suggestions.push(newWord);
            }
        }
        return suggestions;
    }
}
//# sourceMappingURL=WordChecker.js.map