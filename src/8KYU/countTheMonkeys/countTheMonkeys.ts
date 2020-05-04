export const monkeyCount = (n: number) => {
    let result: number[] = [];
    for (let i = 1; i <= n; i++) {
        result.push(i);
    }
    return result
}


//Alternative
// export function monkeyCount(n: number): number[] {
//     return Array.from({length: n}, (_, i) => i + 1);
//   }