import {CsvParser} from "./utils/CsvParser";
import {BetterStringHasher} from "./hashers/BetterStringHasher";
import {LousyStringHasher} from "./hashers/LousyStringHasher";
import {DegenerateStringHasher} from "./hashers/DegenerateStringHasher";
import {HashTable} from "./utils/HashTable";
import {UserInputReader} from "./utils/UserInputReader";

// CsvParser.parseDataToArray();

// const betterStringHasher = new BetterStringHasher().hash('dupa');
// const lousyStringHasher = new LousyStringHasher().hash('dupa');
// const degenerateStringHasher = new DegenerateStringHasher().hash('dupa');
//
// console.log(betterStringHasher);
// console.log(lousyStringHasher);
// console.log(degenerateStringHasher);
function main(): void {
    let userInput: UserInputReader = new UserInputReader()
    userInput.getInput();
    console.log('test');
    let data = new HashTable();
    data.convertToHashTable();
// userInput.getInput();
    console.log(data.getItem("a"));
    console.log(data.getItem("accept"));
    console.log(data.getItem("venom"));
    console.log(data.lookup("venom"));
}
main();
