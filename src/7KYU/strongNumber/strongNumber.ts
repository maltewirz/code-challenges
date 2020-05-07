export function strongNumber(num: number): string {
    let result: number = 0;
    const strong = "STRONG!!!!";
    const notStrong = "Not Strong !!";
    const arr = num.toString().split('').map(num => parseInt(num))
    arr.forEach(num => {
        let cache: number = 1;
        for (let i = 1; i <= num; i++) {
            cache *= i;
        }
        result += cache;
    })
    return result === num ? strong : notStrong;
}

//alternative solution: take out factorial function
// export const strongNumber = (num: number): string => {
//     var arr: number[] = [];
  
//     function factorial(n: number) { 
//         return n <= 1 ? 1 : n * factorial(n - 1)
//     }
  
//     return num === String(num).split('')
//         .map((e) => Number(e))
//         .map((e) => factorial(e))
//         .reduce((a, b) => a + b) ? "STRONG!!!!" : "Not Strong !!";
//   };