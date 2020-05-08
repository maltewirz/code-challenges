export const disariumNumber = (n: number): string => {
    return n === String(n).split('')
        .map(num => Number(num))
        .map((num, index) => {
            return Math.pow(num, index + 1)
        })
        .reduce((acc, curr) => acc + curr) 
        ? "Disarium !!" : "Not !!"
}