// export class objectClass
// {
//   public id: number;
//   public value: string;
// }

export function parseMolecule(formula: string) {
    let result: any[]= [];  // change to object class later
    while ((formula = parseNextChar(formula)) !== '');
    function parseNextChar(str: string) {
        const elem = /^[A-Z]{1}[a-z]?/;
        const open = /^[({[]/;
        const close = /^[)}\]]/;
        const digit = /^[0-9]+/;
    }
    
}

// start from innermost bracket (round, square or curl)
// break apart items by small letters
// count molecules and put them into object
// continue with next bracket
// return



// let obj = {};
// text.toLowerCase().split('').forEach(letter => {
//     obj[letter] ? obj[letter] = ++obj[letter] : obj[letter] = 1;
// });
// return Object.values(obj).filter(num => num > 1).length;

// validBraces(braces){
//     const pairs = {
//         ')' : '(',
//         ']' : '[',
//         '}' : '{'
//     };
//     let stack = [];
//     for (let i = 0; i < braces.length; i++) {
//         if (braces[i] === '(' || braces[i] === '[' || braces[i] === '{') {
//             stack.push(braces[i]);
//         } else if (stack[stack.length-1] === pairs[braces[i]]) {
//             stack.pop();
//         } else {
//             return false;
//         }
//     }
//     return stack.length === 0;
// }

