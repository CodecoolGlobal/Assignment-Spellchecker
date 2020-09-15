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
    exports.DegenerateStringHasher = void 0;
    var DegenerateStringHasher = /** @class */ (function () {
        function DegenerateStringHasher() {
        }
        DegenerateStringHasher.prototype.hash = function (s) {
            return 0;
        };
        return DegenerateStringHasher;
    }());
    exports.DegenerateStringHasher = DegenerateStringHasher;
});
//# sourceMappingURL=DegenerateStringHasher.js.map