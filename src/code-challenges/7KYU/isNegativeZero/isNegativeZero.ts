// https://www.codewars.com/kata/5c5086287bc6600001c7589a/train/typescript
export function isNegativeZero(n:number):boolean {
    if (n < 0) {
        return false
    }
    return 1/n === -Infinity
}

//alternative
// export function isNegativeZero(n:number):boolean {
//     return Object.is(n, -0)
//   }