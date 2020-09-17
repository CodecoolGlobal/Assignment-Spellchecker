export class WordChecker {
    private _listOfWords: string[];
    alphabet: string = "abcdefghijklmnopqrstuvwxyz";

    constructor(listOfWords: string[]) {
        this._listOfWords = listOfWords
    }


    get listOfWords(): string[] {
        return this._listOfWords;
    }

    public checkInsertingLetterInEachPositionOfTheString(word: string): string[] {
        const suggestions: string[] = [];
        for (let position = 0; position < word.length; position++) {
            for (let i = 0; i < this.alphabet.length; i++) {
                let suggestion: string = '';//StringBuffer stringBuffer = new StringBuffer;
                suggestion = [word.slice(0, position), this.alphabet[i], word.slice(position)].join('');
                if (this._listOfWords.includes(suggestion) && !suggestions.includes(suggestion)) {
                    suggestions.push(suggestion)
                }
            }
        }
        return suggestions;
    }

    public checkReplacingEachLetterWithAnother(word: string): string[] {
        const suggestions: string[] = [];
        for (let position = 0; position < word.length; position++) {
            for (let i = 0; i < this.alphabet.length; i++) {
                let suggestion: string = '';//StringBuffer stringBuffer = new StringBuffer;
                suggestion = word.substr(0, position) + this.alphabet[i] + word.substr(position + 1, word.length);
                if (this._listOfWords.includes(suggestion) && !suggestions.includes(suggestion)) {
                    suggestions.push(suggestion)
                }
            }
        }
        return suggestions;
    }
}


