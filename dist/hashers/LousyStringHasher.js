export class LousyStringHasher {
    hash(s) {
        let h = 0;
        for (let i = 0; i < s.length; ++i) {
            h += s.charCodeAt(i);
        }
        return h;
    }
}
//# sourceMappingURL=LousyStringHasher.js.map