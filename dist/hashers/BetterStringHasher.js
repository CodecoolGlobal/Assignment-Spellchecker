export class BetterStringHasher {
    hash(s) {
        let h = 0;
        for (let i = 0; i < s.length; ++i) {
            h *= 37;
            h += s.charCodeAt(i);
        }
        return h;
    }
}
//# sourceMappingURL=BetterStringHasher.js.map