export class CsvParser {
    constructor() {
        this.inputElement = document.getElementById("input");
        this.textAreaElement = document.getElementById("textarea");
    }
    get lines() {
        return this._lines;
    }
    readFile() {
        this.inputElement.addEventListener('change', () => {
            let files = this.inputElement.files;
            if (files.length == 0)
                return;
            const file = files[0];
            let reader = new FileReader();
            reader.onload = (e) => {
                const file = e.target.result;
                if (typeof file === "string") {
                    this._lines = file.split(/\r\n|\n/);
                    this.textAreaElement.value = this._lines.join('\n');
                }
            };
            reader.onerror = (e) => alert(e.target.error.name);
            reader.readAsText(file);
        });
    }
}
//# sourceMappingURL=CsvParser.js.map