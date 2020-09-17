// import CsvParser from './CsvParser';
import { CsvParser } from "./CsvParser";
const filepath = 'wordlist.txt';
export class SpellChecker {
    constructor() {
        this.fileParser = new CsvParser();
        // this.wordsList = this.fileParser.parse();// put correct method
    }
    findByCharDeleting(word, wordsList) {
        let replacement = [];
        let newWord;
        for (let i = 0; i < word.length; i++) {
            newWord = word.substring(0, i) + word.substring(i + 1);
            if (wordsList.has(newWord)) {
                replacement.push(newWord);
            }
        }
        return replacement;
    }
    findByCharsSwapping(word, wordsList) {
        let replacement = [];
        let newWord;
        for (let i = 0; i < word.length; i += 2) {
            const firstLettertoSwap = word.substring(i, i + 1);
            const secondLetterToSwap = word.substring(i + 1, i + 2);
            newWord = word.substring(0, i) + secondLetterToSwap + firstLettertoSwap + word.substring(i + 2);
            if (wordsList.has(newWord)) {
                replacement.push(newWord);
            }
            if (replacement.length > 3) {
                break;
            }
        }
        for (let i = 1; i < word.length; i += 2) {
            const firstLetterToSwap = word.substring(i, i + 1);
            const secondLetterToSwap = word.substring(i + 1, i + 2);
            newWord = word.substring(0, i) + secondLetterToSwap + firstLetterToSwap + word.substring(i + 2);
            if (wordsList.has(newWord)) {
                replacement.push(newWord);
            }
            if (replacement.length > 3) {
                break;
            }
        }
        return replacement;
    }
}
//# sourceMappingURL=SpellChecker.js.map