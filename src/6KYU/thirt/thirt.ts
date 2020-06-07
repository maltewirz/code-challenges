// https://www.codewars.com/kata/564057bc348c7200bd0000ff/train/typescript
const remainderSequence: number[] = [1, 10, 9, 12, 3, 4];
let previousResult: number = 0;

export function thirt(n: number): number {
    let arr = String(n).split('').map(string => Number(string));
    let result: number = 0; 
    let currentNum: number = 0;
    for (let i = 0; i < arr.length; i++) {
        // get last number from array - therefore subtract 1
        currentNum = arr[arr.length - i - 1];
        result += remainderSequence[i % remainderSequence.length] * currentNum;
    }
    if (result === previousResult) {
        return result;
    } else {
        previousResult = result;
        return thirt(result);
    }
}

// alternative II

// export function thirt(n: number): number {
//     let remainders: number[] = [1, 10, 9, 12, 3, 4];
//     let result = n.toString().split('').reverse().map( (c,i) => parseInt(c)*remainders[i%6]).reduce( (p,c) => p += c);
//     return n == result ? result : thirt(result)
//   }


////////////////////////////////////////////
// steps
// 1. get each num from n - ok
// 2 multiply each num starting from right to left with the remainderSequence
// 3 add those products
// 4 check: is product modulus the same as with number before?
// 4.1 if not same, run function again with added products
// 4.2 if same return the number - base case for exiting recursive function.

// expect(thirt(1234567)).toStrictEqual(87);
// 7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178
// 8x1 + 7x10 + 1x9 = 87
// 7x1 + 8x10 = 87  => base case result

// get number from input: 7 6 5 4 3 2 1 
// get number from sequence: 1, 10, 9, 12, 3, 4

////////////////////////////////////////////
// alternative way:
// let remainArr = [1, 10, 9, 12, 3, 4]
// let priorSum = 0

// export function thirt(n: number): number {
//     let numArr = n.toString().split('')
//     let runningSum = 0
//     let thisNum: any;
//     // this runs for each number of input -> 7 times
//     n.toString().split('').forEach((item,idx) => {
//         // takes the last number from array and mutates (removes) it
//         thisNum =  numArr.pop()
//         // console.log(idx, remainArr.length, idx%remainArr.length, )
//         // console.log(remainArr[(idx%remainArr.length)], n)
//         // if remainArr[(idx%remainArr.length)] has a number, it multiplicates it with the input number
//         // it's smart way to loop in the remainArr by using the modulus operator
//         runningSum += remainArr[(idx%remainArr.length)] 
//             ? remainArr[(idx%remainArr.length)] * thisNum 
//             : parseInt(thisNum) 
//     })

//     // base case - recursive function to end
//     if (runningSum === priorSum){ 
//         return runningSum
//     // else save runningSum externally and run recursivly
//     } else { 
//         priorSum = runningSum
//         return thirt(runningSum)
//     }
// }
