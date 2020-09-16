import { CsvParser } from "./CsvParser";
import { BetterStringHasher } from "../hashers/BetterStringHasher";
export class HashTable {
    constructor() {
        const length = CsvParser.parseDataToArray().length;
        this.table = new Array(length);
        this.data = CsvParser.parseDataToArray();
    }
    setItem(key, value) {
        const index = hashKeyToIndexNumber(key, this.table.length);
        this.table[index] = value;
    }
    getItem(key) {
        const index = hashKeyToIndexNumber(key, this.table.length);
        return this.table[index];
    }
    convertToHashTable() {
        for (let i = 0; i < this.data.length; i++) {
            const hashedWord = new BetterStringHasher().hash(this.data[i]);
            this.setItem(this.data[i], hashedWord);
        }
    }
    removeItem(word) {
        this.data.splice(this.data.indexOf(word), 1);
    }
    lookup(word) {
        return this.data.includes(word);
    }
}
function hashKeyToIndexNumber(word, tableSize) {
    let hash = 3;
    for (let i = 0; i < word.length; i++) {
        hash = hash * word.charCodeAt(i) % tableSize;
    }
    return hash;
}
//# sourceMappingURL=HashTable.js.map