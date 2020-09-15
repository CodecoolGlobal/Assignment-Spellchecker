export class CsvParser {

    static printArrayFromTxt()
    {
        const fs = require('fs');

        const data = fs.readFileSync('../wordlist.txt')
            .toString() // convert Buffer to string
            .split('\n') // split string to lines
            .map((e: string) => e.trim())

        console.log(data.slice(2, 10))
    }
}