export class UserInputReader {
    getInput() {
        console.log('jestem w js');
        let inputVal = '';
        const button = document.getElementById('btn-summary');
        button.onclick = (ev) => {
            ev.preventDefault();
            const input = document.getElementById('ex1').value;
            if (input) {
                inputVal = input;
                console.log(inputVal);
            }
        };
        return inputVal;
    }
}
// let userInput : UserInputReader = new UserInputReader()
// userInput.getInput();
//# sourceMappingURL=UserInputReader.js.map