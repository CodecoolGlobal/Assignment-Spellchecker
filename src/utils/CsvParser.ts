export class CsvParser {
    inputElement: HTMLInputElement;
    textAreaElement: HTMLTextAreaElement;

    constructor() {
        this.inputElement = <HTMLInputElement>document.getElementById("input")!;
        this.textAreaElement = <HTMLTextAreaElement>document.getElementById("textarea")!;
    }

    readFile(){
        this.inputElement.addEventListener('change',()=>{
            let files = this.inputElement.files;

            if(files.length == 0) return;

                const file = files[0];

            let reader = new FileReader();

            reader.onload = (e) => {

                const file = e.target.result;

                if (typeof file === "string") {
                    const lines = file.split(/\r\n|\n/);
                    this.textAreaElement.value = lines.join('\n');
                }
            };


            reader.onerror = (e) => alert(e.target.error.name);

            reader.readAsText(file);

        })
    }

}