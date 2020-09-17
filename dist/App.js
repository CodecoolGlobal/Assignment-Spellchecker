import { CsvParser } from "./utils/CsvParser.js";
import { WordChecker } from "./utils/WordChecker.js";
const init = () => {
    const csvParser = new CsvParser();
    csvParser.readFile();
    const button = document.getElementById('btn-summary');
    button.addEventListener('click', function () {
        const wordChecker = new WordChecker(csvParser.lines);
        const inputValue = document.getElementById('ex1').value;
        addSuggestions(wordChecker.checkInsertingLetterInEachPositionOfTheString(inputValue));
    });
    function addSuggestions(listOfWords) {
        let p = document.querySelector("p");
        p.innerText = "DID YOU PERHAPS MEAN:";
        let ulElement = document.querySelector("ul");
        listOfWords.forEach(word => {
            let liElement = document.createElement("li");
            liElement.innerText = word;
            ulElement.appendChild(liElement);
        });
    }
};
init();
//# sourceMappingURL=App.js.map