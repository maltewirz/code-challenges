export function tribonacci([a, b, c]: number[], n: number): number[] {
    let result = [a , b, c];
    if (n === 0) {
        return [];
    }
    if (n === 1) {
        return [result[0]];   
    } 
    if (n === 2) {
        return [result[0], result[1]];   
    } 
    for (let i = 0; i < n - 3; i++) {
        const sum: number = result[result.length-1] + result[result.length-2] + result[result.length-3];
        result.push(sum);
    }
    return result;
}

// alternative
// export function tribonacci(s: Array<number>, n: number): number[] {
//     for (let i = 0; s.length < n; i++) s.push(s[i] + s[i + 1] + s[i + 2]);
//     console.log(s)
//     return s.slice(0,n);
//   }