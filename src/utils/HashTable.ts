import {CsvParser} from "./CsvParser";
import {StringHasher} from "../hashers/StringHasher";

export class HashTable {
    hashedTable: Array<string>;
    data: Array<string>;
    hasher: StringHasher;

    constructor(hasher: StringHasher) {
        this.hashedTable = [];
        this.data = CsvParser.parseDataToArray();
        this.hasher = hasher;
    }


    public setItem(key: number, value: string) {
        this.hashedTable[key] = value;
    }

    public getItemByKey(key: number) {
        return this.hashedTable[key];
    }

    public convertToHashTable() {
        for (let i = 0; i < this.data.length; i++) {
            const hashedWord = this.hasher.hash(this.data[i]);
            this.setItem(hashedWord, this.data[i]);
        }
    }

    public removeItem(word: string): void {
        this.data.splice(this.hashedTable.indexOf(word), 1);

    }

    public lookup(word: string): boolean {
        return this.hashedTable.includes(word);
    }

}

