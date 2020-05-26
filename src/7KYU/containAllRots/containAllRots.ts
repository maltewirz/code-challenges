export function containAllRots(str: string, arr: string[]): boolean {
    if (str.length === 0) {
        return true;
    }
    for (let i = 0; i < str.length; i++) {
        if (arr.indexOf(str.slice(i) + str.slice(0, i)) === -1) {
            return false;
        }
    }
    return true;
}
