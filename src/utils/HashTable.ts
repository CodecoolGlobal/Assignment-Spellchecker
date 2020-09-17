// import {CsvParser} from "./CsvParser";
// import {BetterStringHasher} from "../hashers/BetterStringHasher";
//
// export class HashTable {
//     table: Array<number>;
//     data: Array<string>;
//
//     constructor() {
//         const length = CsvParser.parseDataToArray().length;
//         this.table = new Array(length);
//         this.data = CsvParser.parseDataToArray();
//     }
//
//     public setItem(key: string, value: number) {
//         const index = hashKeyToIndexNumber(key, this.table.length);
//         this.table[index] = value;
//     }
//
//     public getItem(key: string) {
//         const index = hashKeyToIndexNumber(key, this.table.length)
//         return this.table[index];
//     }
//
//     public convertToHashTable() {
//         for (let i = 0; i < this.data.length; i++) {
//             const hashedWord = new BetterStringHasher().hash(this.data[i]);
//             this.setItem(this.data[i], hashedWord);
//         }
//     }
//
//     public removeItem(word: string): void {
//         this.data.splice(this.data.indexOf(word), 1);
//
//     }
//
//     public lookup(word: string): boolean {
//         return this.data.includes(word);
//     }
//
// }
//
// function hashKeyToIndexNumber(word: string, tableSize: number): number {
//     let hash = 3;
//     for (let i = 0; i < word.length; i++) {
//         hash = hash * word.charCodeAt(i) % tableSize;
//     }
//     return hash;
// }
