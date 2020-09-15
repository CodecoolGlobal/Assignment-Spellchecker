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
    exports.BetterStringHasher = void 0;
    var BetterStringHasher = /** @class */ (function () {
        function BetterStringHasher() {
        }
        BetterStringHasher.prototype.hash = function (s) {
            var h = 0;
            for (var i = 0; i < s.length; ++i) {
                h *= 37;
                h += s.charCodeAt(i);
            }
            return h;
        };
        return BetterStringHasher;
    }());
    exports.BetterStringHasher = BetterStringHasher;
});
//# sourceMappingURL=BetterStringHasher.js.map