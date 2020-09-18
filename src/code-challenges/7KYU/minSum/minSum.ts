export function minSum(arr: number[]) {
    const sortedArr = arr.sort((a,b) => b - a );
    let result: number = 0;
    for (let i = 0; i < sortedArr.length/2; i++) {
        result += (arr[i] * arr[arr.length - i - 1]);
    }
    return result;
}


// sort array from high to low,
// multiply highest with lowers and add sums