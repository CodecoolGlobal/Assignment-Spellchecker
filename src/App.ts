import {CsvParser} from "./utils/CsvParser";
import {BetterStringHasher} from "./BetterStringHasher";
import {LousyStringHasher} from "./LousyStringHasher";
import {DegenerateStringHasher} from "./DegenerateStringHasher";

CsvParser.printArrayFromTxt();

const betterStringHasher = new BetterStringHasher().hash('dupa');
const lousyStringHasher = new LousyStringHasher().hash('dupa');
const degenerateStringHasher = new DegenerateStringHasher().hash('dupa');

console.log(betterStringHasher);
console.log(lousyStringHasher);
console.log(degenerateStringHasher);