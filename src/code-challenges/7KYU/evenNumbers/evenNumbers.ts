export function evenNumbers(array: number[], n: number): number[] {
    const even = array.filter(num => num % 2 === 0);
    return even.slice(-n);
}