import {CsvParser} from "./CsvParser";
import {BetterStringHasher} from "../hashers/BetterStringHasher";

export class HashTable {
    table: Array<number>;

    constructor() {
        const length = CsvParser.parseDataToArray().length;
        this.table = new Array(length);
    }


    public setItem(key: string, value: number) {
        const index = hashKeyToIndexNumber(key, this.table.length);
        this.table[index] = value;
    }

    public getItem(key: string) {
        const index = hashKeyToIndexNumber(key, this.table.length)
        return this.table[index];
    }

    public convertToHashTable() {
        let data: Array<string> = CsvParser.parseDataToArray();

        for (let i = 0; i < data.length; i++) {
            const hashedWord = new BetterStringHasher().hash(data[i]);
            this.setItem(data[i], hashedWord);
        }
    }

}

function hashKeyToIndexNumber(word: string, tableSize: number): number {
    let hash = 3;
    for (let i = 0; i < word.length; i++) {
        hash = hash * word.charCodeAt(i) % tableSize;
    }
    return hash;
}
