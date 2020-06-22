// https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/typescript
export function partsSums(ls: number[]): number[] {
    let result: number[] = [0];
    let l = ls.length - 1;

    for (let i = l; i >= 0; i--) {
        result.push(ls[i] + result[l - i]);
    }

    return result.reverse();
}


// Alternative: Compute the sum at the beginning and then subtract each element from it in a loop.
// ls = [0, 1, 3, 6, 10]

// function partsSums(ls) {
//     let sum = ls.reduce((sum, n) => sum + n, 0)
//     res  = [sum]
//     for (let i = 1; i <= ls.length; i++){
//         sum -= ls[i-1]
//         res.push(sum )
//     }
//     return res
// }
// console.log(partsSums(ls))
