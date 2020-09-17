export class SpellChecker {
    private _listOfWords: string[]

    constructor(listOfWords: string []) {
        this._listOfWords = listOfWords;
    }

    get listOfWords(): string[] {
        return this._listOfWords;
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
}