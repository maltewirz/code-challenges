export function rowWeights(arr: number[]) {
    let result: number[] = [0,0]
    for (let i = 0; i < arr.length; i += 2) {
        result[0] += arr[i];
        if (Number.isInteger(arr[i + 1])) {
            result[1] += arr[i + 1];
        }
    }
    return result;
}

// alternative solution

// export function rowWeights(arr: number[]): number[] {
//     return arr.reduce((sumOfWeights, weight, i) => {
//       sumOfWeights[i % 2] += weight;
//       return sumOfWeights;
//     }, [0, 0]);
//   }