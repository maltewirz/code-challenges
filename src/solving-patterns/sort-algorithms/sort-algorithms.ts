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

// Bubble Sort - REDO
// A sorting algorithm where the largest values bubble up to the top!
// Time Complexity O(n2) Space Complexity O(1)

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

// Selection Sort - REDO
// Similar to bubble sort, but instead of first placing large values into
// sorted position, it places small values into sorted position.
// Time Complexity O(n2) Space Complexity O(1)

export function selectionSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
        let smallest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j;
            }
        }
        if (i !== smallest) {
            [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        }
    }
    return arr;
}

// Insertion Sort - REDO
// Builds up the sort by gradually creating a larger left half which is always sorted.
// Time Complexity O(n2) Space Complexity O(1)

export function insertionSort(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
        const currentVal = arr[i];
        let j;
        for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

// Faster sorts: Reduce time complexity from O(n) to O(n log n)

// Merge sort
// Combination of merging and sorting
// Exploits the fact that arrays of 0 or 1 element are always sorted
// Works by decomposing an array into smaller arrays of 0 or 1 elements,
// then building up a newly sorted array.

// This helper function takes two sorted arrays as input and ouputs them sorted.
// Don't modify the parameters passed to it.

export function mergeHelper(arr1: number[], arr2: number[]): number[] {
    const results: number[] = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

export function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return mergeHelper(left, right);
}
