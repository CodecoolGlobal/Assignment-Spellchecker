export class CsvParser {
    inputElement: HTMLInputElement;
    private _lines: string[];

    get lines(): string[] {
        return this._lines;
    }

    constructor() {
        this.inputElement = <HTMLInputElement>document.getElementById("input")!;
    }

    readFile() {
        this.inputElement.addEventListener('change', () => {
            let files = this.inputElement.files;
            if (files.length == 0) return;
            const file = files[0];
            let reader = new FileReader();
            reader.onload = (e) => {
                const file = e.target.result;
                if (typeof file === "string") {
                    this._lines = file.split(/\r\n|\n/);
                }
            };
            reader.onerror = (e) => alert(e.target.error.name);
            reader.readAsText(file);
        })

    }
}