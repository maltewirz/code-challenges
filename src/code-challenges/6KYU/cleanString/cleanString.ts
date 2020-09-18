// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/typescript

export function cleanString(str: string) {
    let result = [];
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== '#') {
            result.push(arr[i])
        } else {
            result.pop()
        }
    }
    return result.join('');
}

// alternative
// export function cleanString(s: string) {
//     return Array.from(s).reduce((acc, curr) => curr == '#'? acc.slice(0,-1) : acc.concat(curr), '')
//   }