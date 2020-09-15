import {StringHasher} from "./StringHasher";

export class LousyStringHasher implements StringHasher {

    hash(s:string): number {
        let h:number = 0;

        for (let i = 0; i < s.length; ++i) {
            h += s.charCodeAt(i);
        }
        return h;
    }
}
