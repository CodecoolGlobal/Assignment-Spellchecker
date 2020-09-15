import {CsvParser} from "./utils/CsvParser";
import {BetterStringHasher} from "./hashers/BetterStringHasher";
import {LousyStringHasher} from "./hashers/LousyStringHasher";
import {DegenerateStringHasher} from "./hashers/DegenerateStringHasher";

CsvParser.printArrayFromTxt();

const betterStringHasher = new BetterStringHasher().hash('dupa');
const lousyStringHasher = new LousyStringHasher().hash('dupa');
const degenerateStringHasher = new DegenerateStringHasher().hash('dupa');

console.log(betterStringHasher);
console.log(lousyStringHasher);
console.log(degenerateStringHasher);