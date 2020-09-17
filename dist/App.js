import { CsvParser } from "./utils/CsvParser.js";
import { WordChecker } from "./utils/WordChecker.js";
// import {HashTable} from "./utils/HashTable";
// import {UserInputReader} from "./utils/UserInputReader.js";
// const betterStringHasher = new BetterStringHasher().hash('dupa');
// const lousyStringHasher = new LousyStringHasher().hash('dupa');
// const degenerateStringHasher = new DegenerateStringHasher().hash('dupa');
//
// console.log(betterStringHasher);
// console.log(lousyStringHasher);
// console.log(degenerateStringHasher);
// function main(): void {
//     let userInput: UserInputReader = new UserInputReader()
//     userInput.getInput();
//     console.log('test');
//     let data = new HashTable();
//     data.convertToHashTable();
// // userInput.getInput();
//     console.log(data.getItem("a"));
//     console.log(data.getItem("accept"));
//     console.log(data.getItem("venom"));
//     console.log(data.lookup("venom"));
//     const dupa = new UserInputReader();
//     dupa.getInput();
// const tablica:string[] = [];
//     const input: HTMLInputElement = document.querySelector('input[type="file"]')!
//     input.addEventListener('change',function(e){
//             console.log(input.files)
//             const reader = new FileReader()
//             reader.onload = function(){
//                 if (typeof reader.result === "string") {
//                     tablica.push(reader.result);
//                 }
//             }
//             // @ts-ignore
//         reader.readAsText(input.files[0])
//         }, false
//     )
// const fs = require("fs");
//
// function parseDataToArray()
// {
//     return fs.readFileSync('../wordlist.txt')
//         .toString() // convert Buffer to string
//         .split('\n') // split string to lines
//         .map((e: string) => e.trim());
// }
//     // const csvParser = CsvParser.parseDataToArray();
//     console.log(parseDataToArray());
// const userInputReader = new UserInputReader();
// const dupa = userInputReader.getInput();
const csvParser = new CsvParser();
csvParser.readFile();
// const wordChecker = new WordChecker(csvParser.lines);
const button = document.getElementById('btn-summary');
button.addEventListener('click', function () {
    const wordChecker = new WordChecker(csvParser.lines);
    const inputValue = document.getElementById('ex1').value;
    console.log(wordChecker.checkInsertingLetterInEachPositionOfTheString(inputValue));
});
//# sourceMappingURL=App.js.map