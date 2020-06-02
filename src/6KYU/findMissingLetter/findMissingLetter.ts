export function findMissingLetter(array: string[]): string {
    let alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
    if (array[0] === array[0].toUpperCase()) {
        alphabet = alphabet.toUpperCase();
    }
    const first = alphabet.indexOf(array[0])
    for (let i = 0; i < array.length; i++) {
        if (alphabet[first+i] !== array[i]) {
            return alphabet[first+i];
        }
    }
    return '';
}

// alternative
// export function findMissingLetter(array:string[]):string
// {
//     for(let i = 0; i < array.length; i++) {
//         if(array[i].charCodeAt(0) + 1 != array[i+1].charCodeAt(0))
//             return String.fromCharCode(array[i].charCodeAt(0) + 1);
//     }
// }