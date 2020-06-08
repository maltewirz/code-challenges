export function foldArray(array: number[], runs: number): number[]  {
    let leftArr = array.slice(0, array.length/2);
    let rightArr: number[] = [];
    let middleArr: number[] = [];
    let result: number[] = [];
    if (array.length % 2 !== 0) {
        rightArr = array.slice(array.length/2+1);
        middleArr = array.slice(array.length/2, array.length/2+1)
    } else {
        rightArr = array.slice(array.length/2);
    }
    rightArr.reverse()
    for (let i = 0; i < leftArr.length; i++) {
        result.push(leftArr[i] + rightArr[i])
    }
    result = result.concat(middleArr)
    if (runs === 1) {
        return result
    } 
    runs--;
    return foldArray(result, runs)
}


// alternative
// export function foldArray(array: number[], runs: number): number[] {
//     const arr2 = [...array]
//     while (runs > 0) {
//       arr2.map((val, i, arr) => i + 1 === arr.length ? val : arr[i] = val + arr.pop());
//       runs--;
//     }
//     return arr2;
//   }