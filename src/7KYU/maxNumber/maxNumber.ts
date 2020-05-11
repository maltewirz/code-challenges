export const maxNumber = (n: number): number => {
    return Number(
        String(n)
        .split('')
        .map(num => Number(num))
        .sort((a,b) => b - a)
        .join('')
        )
}