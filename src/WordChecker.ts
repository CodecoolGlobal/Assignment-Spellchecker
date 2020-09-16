export class WordChecker {
    listOfWords: string[];
    alphabet: string = "ABCDEFGHIJKLMNOPQRSTVWXYZ";

    constructor(listOfWords: string[]) {
        this.listOfWords = listOfWords
    }


    public checkInsertingLetterInEachPositionOfTheString(word: string) {
        const suggestions: string[] = [];

        for (let position = 0; position < word.length; position++) {
            for (let i = 0; i < this.alphabet.length; i++) {
                let suggestion: string = '';//StringBuffer stringBuffer = new StringBuffer;
                suggestion = [word.slice(0,position),this.alphabet[i].toLowerCase(),word.slice(position)].join('');
                if (this.listOfWords.includes(suggestion) && !suggestions.includes(suggestion)) {
                    suggestions.push(suggestion)
                }
            }
        }
        return suggestions;

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


