// https://www.codewars.com/kata/52f831fa9d332c6591000511
const startBracket = ["(", "[", "{"];
const endBracket = [")", "]", "}"];

export function parseMolecule(formula: string): Record<string, number> {
    const product = (acc: number, cur: number) => acc * cur;
    // grouped array, also groups string together if capital letter is followed by small.
    const f = formula.match(/[A-Z][a-z]?|\d+|./g) || [];
    const m: number[] = [];
    let d = 0;
    const a: { [key: string]: number} = {};
    let l = "";

    for (let i = f.length - 1; i >= 0; i--) {
        if (isNaN(Number(f[i])) === false) {
            m.push(Number(f[i]));
        } else if (endBracket.indexOf(f[i]) > -1) { // if endbracket is found
            if (isNaN(Number(l)) === true) {
                m.push(1);
            }
            d++;
        } else if (startBracket.indexOf(f[i]) > -1) {
            d--;
            m.pop();
        } else {
            a[f[i]] === undefined 
                ? m.length > 0 
                    ? a[f[i]] = m.reduce(product) 
                    : a[f[i]] = 1
                : a[f[i]] = a[f[i]] + (m.length > 0 ? m.reduce(product) : 1);
            if (m.length > d) {
                m.pop();
            }
        }
        l = f[i];
    }
    return a;
}
