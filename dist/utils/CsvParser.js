import * as fs from "fs";
export class CsvParser {
    static parseDataToArray() {
        return fs.readFileSync('../wordlist.txt')
            .toString() // convert Buffer to string
            .split('\n') // split string to lines
            .map((e) => e.trim());
    }
}
//# sourceMappingURL=CsvParser.js.map