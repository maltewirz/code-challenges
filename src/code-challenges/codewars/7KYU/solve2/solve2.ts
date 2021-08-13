// https://www.codewars.com/kata/59dd2c38f703c4ae5e000014/train/typescript
export function solve2(s: string) {
    const arr = s.split('');
    let result = '';
    let cache = '';
    for (let i = 0; i < arr.length; i++) {        
        if (/[0-9]/.test(arr[i]) && !/[0-9]/.test(arr[i+1])) {
            cache += arr[i];
            if (Number(cache) > Number(result)) {
                result = cache;
                cache = '';
            }
        } else if (/[0-9]/.test(arr[i])) {
            cache += arr[i]
        } else {
            cache = '';
        }
    }
    return Number(result);
}

/**
 * Alternative: Compare the number groupings and return the largest number.
 */
// export function solve(s: string): number {
//     return Math.max(...s.replace(/[a-z]+/gi, "|").split("|").filter((n) => n).map(Number));
//   };