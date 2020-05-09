export const specialNumber = (n: number): string => {
    return String(n).split('')
        .map(num => Number(num))
        .some(num => num > 5)
        ? 'NOT!!' : 'Special!!'
}