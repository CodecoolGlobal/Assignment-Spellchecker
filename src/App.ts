import {CsvParser} from "./utils/CsvParser.js";
import {WordChecker} from "./utils/WordChecker.js";

const init = () => {
    const csvParser = new CsvParser();
    csvParser.readFile();
    const button: HTMLElement = document.getElementById('btn-summary')!;

    button.addEventListener('click', function () {
        const el = document.querySelector("ul");
        if (el.hasChildNodes()) cleanSuggestions();
        const wordChecker = new WordChecker(csvParser.lines);
        const inputValue: string = (<HTMLInputElement>document.getElementById('ex1')).value;
        // addSuggestions(wordChecker.checkInsertingLetterInEachPositionOfTheString(inputValue));
        // addSuggestions(wordChecker.checkReplacingEachLetterWithAnother(inputValue));
        addSuggestions(wordChecker.findByCharDeleting(inputValue));
        // addSuggestions(wordChecker.findByCharsSwapping(inputValue));
    })

    function addSuggestions(listOfWords: string[]) {
        let p = document.querySelector("p");
        p.innerText = "DID YOU PERHAPS MEAN:"

        let ulElement = document.querySelector("ul");
        listOfWords.forEach(word => {
            let liElement = document.createElement("li");
            liElement.innerText = word;
            ulElement.appendChild(liElement);
        });
    }

    function cleanSuggestions() {
        let ulElement = document.querySelector("ul");
        while (ulElement.firstChild) {
            ulElement.removeChild(ulElement.lastChild);
        }
    }
}
init();
