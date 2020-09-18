// https://www.codewars.com/kata/52f831fa9d332c6591000511
const startBracket = ["(", "[", "{"];
const endBracket = [")", "]", "}"];

export function parseMolecule(formula: string): Record<string, number> {
    const product = (acc: number, cur: number) => acc * cur;
    // grouped array, also groups string together if capital letter is followed by small.
    const arr = formula.match(/[A-Z][a-z]?|\d+|./g) || [];
    const multiplierArr: number[] = [];
    let bracketCounter = 0;
    const result: { [key: string]: number} = {};
    let lastChar = "";

    for (let i = arr.length - 1; i >= 0; i--) {       
         
        if (isNaN(Number(arr[i])) === false) { // checking if number, pushing to multiplierArr
            multiplierArr.push(Number(arr[i]));
        } else if (endBracket.indexOf(arr[i]) > -1) { // if endbracket is found, increase bracketCounter
            if (isNaN(Number(lastChar)) === true) {   // if lastChar isNaN, push '1' on multiplierArr
                multiplierArr.push(1);
            }
            bracketCounter++;
        } else if (startBracket.indexOf(arr[i]) > -1) { // if startbracket is found
            bracketCounter--;                   // subtract from bracketCounter and multiplierArr
            multiplierArr.pop();
        } else { // if element is found:
            result[arr[i]] === undefined
                // if elem not in result array, this takes the product of multiplierArr or 1 for the counter of element  
                ? multiplierArr.length > 0 
                    ? result[arr[i]] = multiplierArr.reduce(product) 
                    : result[arr[i]] = 1
                // if elem in array, this updates the elem counter
                : result[arr[i]] = result[arr[i]] + (multiplierArr.length > 0 ? multiplierArr.reduce(product) : 1);
            if (multiplierArr.length > bracketCounter) {
                multiplierArr.pop();
            }
        }
        lastChar = arr[i];
    }
    return result;
}
