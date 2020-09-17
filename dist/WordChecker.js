class WordChecker {
    constructor(listOfWords) {
        // listOfWords: Array<string> = new ListOfWords;
        this.alphabet = "ABCDEFGHIJKLMNOPQRSTVWXYZ";
        // this.listOfWords = listOfWords
    }
    checkInsertingLetterInEachPositionOfTheString(word, suggestions) {
        for (let position = 0; position < word.length; position++) {
            for (let i = 0; i < this.alphabet.length; i++) {
                let suggestion = ''; //StringBuffer stringBuffer = new StringBuffer;
                suggestion = [word.slice(0, position), this.alphabet[i], word.slice(position)].join('');
                // suggestion.splice(position, 0, this.alphabet[i]); //stringBuffer.insert(position,this.alphabet[i]
                // const suggestion = suggestionArray.toString();
                if (!suggestions.includes(suggestion)) {
                    suggestions.push(suggestion);
                }
            }
        }
    }
    checkReplacingEachLetterWithAnother(word, suggestions) {
        for (let position = 0; position < word.length; position++) {
            for (let i = 0; i < this.alphabet.length; i++) {
                const suggestionArray = [];
                suggestionArray.splice(position, 0, this.alphabet[i]);
                const suggestion = suggestionArray.toString();
                if (!suggestions.includes(suggestion)) {
                    suggestions.push(word);
                }
            }
        }
    }
}
//# sourceMappingURL=WordChecker.js.map