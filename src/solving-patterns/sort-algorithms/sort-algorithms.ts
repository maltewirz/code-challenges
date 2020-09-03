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
