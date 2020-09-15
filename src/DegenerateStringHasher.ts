import {StringHasher} from "./StringHasher";

export class DegenerateStringHasher implements StringHasher {
    hash(s: string): number {
        return 0;
    }
}
