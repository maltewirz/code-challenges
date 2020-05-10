export function tidyNumber(num: number): boolean {
    const arr: number[] = String(num).split('').map(num => Number(num));
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
            return false;
        }
    }
    return true;
}

// alternative
// export function tidyNumber(num: number) {
//     return [...num + ''].reduce((prev, curr, i, arr) => prev && (i === 0 || arr[i - 1] <= curr), true);
//   }