export function nthSmallest(arr: number[], pos: number) {
    return arr.sort((a, b) => a - b)[pos-1];
}