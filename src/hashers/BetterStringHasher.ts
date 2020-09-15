import {StringHasher} from "./StringHasher";

export class BetterStringHasher implements StringHasher {
    hash(s: string): number {
        let h: number = 0;
        for (let i = 0; i < s.length; ++i) {
            h *= 37;
            h += s.charCodeAt(i);
        }
        return h;
    }
}