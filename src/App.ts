import {CsvParser} from "./utils/CsvParser";
import {BetterStringHasher} from "./hashers/BetterStringHasher";
import {LousyStringHasher} from "./hashers/LousyStringHasher";
import {DegenerateStringHasher} from "./hashers/DegenerateStringHasher";
import {HashTable} from "./utils/HashTable";

let hush = new BetterStringHasher();
let data = new HashTable(hush);
data.convertToHashTable();

console.log(hush.hash("accept"), data.getItemByKey(6917062944));
console.log(hush.hash("a"), data.getItemByKey(97));
console.log(data.lookup("venom"));
// console.log(data.getItem("accept"));
// console.log(data.getItem("venom"));
// console.log(data.lookup("venom"));
