import {CsvParser} from "./CsvParser";
const filepath: string = 'wordlist.txt';

export class SpellChecker {
    public wordsList: Map<String, String>
    public fileParser: CsvParser;

    constructor() {
        this.fileParser = new CsvParser();
        this.wordsList = this.fileParser.parseDatatoArray();// put correct method
    }

    findByCharDeleting(word: String, wordsList: Map<String, String>): Array<string> {
        let replacement: Array<string> = [];
        let newWord: string;
        for (let i: number = 0; i < word.length; i++) {
            newWord = word.substring(0, i) + word.substring(i + 1);
            if (wordsList.has(newWord)) {
                replacement.push(newWord);
            }
        }
        return replacement;
    }

    findByCharsSwapping(word: String, wordsList: Map<String, String>): Array<string> {
        let replacement: Array<string> = [];
        let newWord: string;
        for (let i: number = 0; i < word.length; i += 2) {
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
        for (let i: number = 1; i < word.length; i += 2) {
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