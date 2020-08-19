// This pattern uses objects or sets to collect values/frequencies of values. This avoids nested loops O(n).
// The function same accepts two arrays and should return true if every value in the array has its corresponding 
// value squared in the second array. The frequency of values must be the same.

export function sameOn2(arrA: number[], arrB: number[]): boolean {
    // complexity O(n^2). If arr 1000 lines, this runs 1 Mio. times.
    arrA = arrA.sort();
    arrB = arrB.sort();

    if (arrA.length !== arrB.length) {
        return false;
    }
    for (let i = 0; i < arrA.length; i++) {
        if (arrA[i] * arrA[i] !== arrB[i]) {
            return false;
        }
    }
    return true;
}

// The function same accepts two arrays and should return true if every value in the array has its corresponding 
// value squared in the second array. The frequency of values must be the same.
function sameOn(arrA: number[], arrB: number[]): boolean {
    // complexity O(n): If arr is 1000 lines, this runs 2000 times
    if (arrA.length !== arrB.length) {
        return false;
    }
    type CountType = {
        [key: number] : number
    }

    const frequencyCounter1: CountType = {};
    const frequencyCounter2: CountType = {};

    for (const val of arrA) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1;
    }
    for (const val of arrB) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1;
    }

    for (const key in frequencyCounter1) {               
        if (!(key * key) in frequencyCounter2) {
            return false;
        }
        if (frequencyCounter2[key * key] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

sameOn([1,2,3,2], [4,1,9,4]) // returns true
