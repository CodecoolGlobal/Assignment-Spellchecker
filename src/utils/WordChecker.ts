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

    findByCharsSwapping(word: String): string[] {
        let suggestions: string[] = [];
        let newWord: string;
        for (let i: number = 0; i < word.length; i += 2) {
            const firstLettertoSwap = word.substring(i, i + 1);
            const secondLetterToSwap = word.substring(i + 1, i + 2);
            newWord = word.substring(0, i) + secondLetterToSwap + firstLettertoSwap + word.substring(i + 2);
            if (this._listOfWords.includes(newWord)) {
                suggestions.push(newWord);
            }
            if (suggestions.length > 3) {
                break;
            }
        }
        for (let i: number = 1; i < word.length; i += 2) {
            const firstLetterToSwap = word.substring(i, i + 1);
            const secondLetterToSwap = word.substring(i + 1, i + 2);
            newWord = word.substring(0, i) + secondLetterToSwap + firstLetterToSwap + word.substring(i + 2);
            if (this._listOfWords.includes(newWord)) {
                suggestions.push(newWord);
            }
            if (suggestions.length > 3) {
                break;
            }
        }
        return suggestions;
    }

    findByCharDeleting(word: string): string [] {
        const suggestions: string[] = [];
        let newWord: string;
        for (let i: number = 0; i < word.length; i++) {
            newWord = word.substring(0, i) + word.substring(i + 1);
            if (this._listOfWords.includes(newWord)) {
                suggestions.push(newWord);
            }
        }
        return suggestions;
    }
}