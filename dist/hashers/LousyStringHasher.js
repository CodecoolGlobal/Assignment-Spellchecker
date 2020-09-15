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
    exports.LousyStringHasher = void 0;
    var LousyStringHasher = /** @class */ (function () {
        function LousyStringHasher() {
        }
        LousyStringHasher.prototype.hash = function (s) {
            var h = 0;
            for (var i = 0; i < s.length; ++i) {
                h += s.charCodeAt(i);
            }
            return h;
        };
        return LousyStringHasher;
    }());
    exports.LousyStringHasher = LousyStringHasher;
});
//# sourceMappingURL=LousyStringHasher.js.map