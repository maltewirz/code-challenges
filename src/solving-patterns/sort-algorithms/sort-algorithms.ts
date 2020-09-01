// What is sorting
// Sorting is the process of rearranging the items in a collection (e.g. an Array)
// so that the items are in some kind of order.
// E.g. sorting numbers from smalles to largest
// Elementary sorting alorithms: Bubble, selection and insertion sort

// Prerequisite - Swapping values:
// ES 5
export function swap(arr: number[], i: number, j: number): number[] {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}

// ES2015
export const swapNew = (arr: number[], i: number, j: number): number[] => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return arr;
};

// Bubble Sort
// A sorting algorithm where the largest values bubble up to the top!
// O(n)

export function bubbleSort(arr: number[]): number[] {
    for (let i = arr.length; i > 0; i--) {
        let swap = false;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swap = true;
            }
        }
        // break loop to avoid already compared solutions
        if (!swap) {
            break;
        }
    }
    return arr;
}
