let remainArr = [1, 10, 9, 12, 3, 4]
let priorSum = 0

export function thirt(n: number): number {
    let numArr = n.toString().split('')
    let runningSum = 0
    let thisNum: any;
    // this runs for each number of input -> 7 times
    n.toString().split('').forEach((item,idx) => {
        // takes the last number from array and mutates (removes) it
        thisNum =  numArr.pop()
        console.log(idx, remainArr.length, idx%remainArr.length, )
        console.log(remainArr[(idx%remainArr.length)], n)
        // if remainArr[(idx%remainArr.length)] has a number, it multiplicates it with the input number
        // it's smart way to loop in the remainArr by using the modulus operator
        runningSum += remainArr[(idx%remainArr.length)] 
            ? remainArr[(idx%remainArr.length)] * thisNum 
            : parseInt(thisNum) 
    })

    // base case - recursive function to end
    if (runningSum === priorSum){ 
        return runningSum
    // else save runningSum externally and run recursivly
    } else { 
        priorSum = runningSum
        return thirt(runningSum)
        // return 0
    }
    
}


// export function thirt(n: number): number {
//     let remainderInput: number =  n % 13;
//     const remainderSequence: number[] = [1, 10, 9, 12, 3, 4];
//     let arr = String(n).split('').map(string => Number(string));

//     for (let i = arr.length; i > 0; i--) {

//     }

//     return 0;
// }


// steps
// 1. get each num from n - ok
// 2 multiply each num starting from right to left with the remainderSequence
// 3 add those products
// check: is product divisble by 13?