(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UserInputReader = void 0;
    var UserInputReader = /** @class */ (function () {
        function UserInputReader() {
        }
        UserInputReader.prototype.getInput = function () {
            console.log('jestem w js');
            var inputVal = '';
            var button = document.getElementById('btn-summary');
            button.onclick = function (ev) {
                ev.preventDefault();
                var input = document.getElementById('ex1').value;
                if (input) {
                    inputVal = input;
                    console.log(inputVal);
                }
            };
            return inputVal;
        };
        return UserInputReader;
    }());
    exports.UserInputReader = UserInputReader;
});
// let userInput : UserInputReader = new UserInputReader()
// userInput.getInput();
//# sourceMappingURL=UserInputReader.js.map