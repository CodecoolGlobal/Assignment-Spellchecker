export class UserInputReader {
    getInput(): String {
        console.log('jestem w js');
        let inputVal: string = '';
        const button: HTMLElement = document.getElementById('btn-summary')!;

        button.onclick = (ev) => {
            ev.preventDefault();
            const input = (<HTMLInputElement>document.getElementById('ex1')).value;
            if (input) {
                inputVal = input;
                console.log(inputVal + "lala");
            }
        }
        return inputVal;
    }
}
// let userInput : UserInputReader = new UserInputReader()
// userInput.getInput();