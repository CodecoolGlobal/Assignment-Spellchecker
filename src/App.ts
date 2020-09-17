import {CsvParser} from "./utils/CsvParser.js";
import {WordChecker} from "./utils/WordChecker.js";
import {SpellChecker} from "./utils/SpellChecker.js";

const init = () => {
    const csvParser = new CsvParser();
    csvParser.readFile();
    const button: HTMLElement = document.getElementById('btn-summary')!;

    button.addEventListener('click', function () {
        const el = document.querySelector("ul");
        if(el.hasChildNodes()) cleanSuggestions();
        const  spellChecker = new SpellChecker(csvParser.lines);
        const wordChecker = new WordChecker(csvParser.lines);
        const inputValue: string = (<HTMLInputElement>document.getElementById('ex1')).value;
        addSuggestions(wordChecker.checkInsertingLetterInEachPositionOfTheString(inputValue));
        // addSuggestions(spellChecker.findByCharDeleting(inputValue));
        // addSuggestions(spellChecker.findByCharsSwapping(inputValue));
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

    function cleanSuggestions(){
        let ulElement = document.querySelector("ul");
        while (ulElement.firstChild) {
            ulElement.removeChild(ulElement.lastChild);
        }

    }
}

init();
