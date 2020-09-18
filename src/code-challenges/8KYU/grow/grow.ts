export const grow = (arr: number []): number => {
    return arr.reduce((acc, curr) => acc * curr)
}