class WordChecker {

    // listOfWords: Array<string> = new ListOfWords;
    alphabet: string = "ABCDEFGHIJKLMNOPQRSTVWXYZ";

    constructor(listOfWords: string[]) {
        // this.listOfWords = listOfWords
    }


    private checkInsertingLetterInEachPositionOfTheString(word: string, suggestions: Array<string>) {
        for (let position = 0; position < word.length; position++) {
            for (let i = 0; i < this.alphabet.length; i++) {
                let suggestion: string = '';//StringBuffer stringBuffer = new StringBuffer;
                suggestion = [word.slice(0,position),this.alphabet[i],word.slice(position)].join('');
                // suggestion.splice(position, 0, this.alphabet[i]); //stringBuffer.insert(position,this.alphabet[i]
                // const suggestion = suggestionArray.toString();
                if (!suggestions.includes(suggestion)) {
                    suggestions.push(suggestion)
                }
            }
        }
    }

    private checkReplacingEachLetterWithAnother(word: string, suggestions: Array<string>) {
        for (let position = 0; position < word.length; position++) {
            for (let i = 0; i < this.alphabet.length; i++) {
                const suggestionArray: Array<string> = [];
                suggestionArray.splice(position, 0, this.alphabet[i]);
                const suggestion = suggestionArray.toString();
                if (!suggestions.includes(suggestion)) {
                    suggestions.push(word)
                }
            }
        }
    }
}


