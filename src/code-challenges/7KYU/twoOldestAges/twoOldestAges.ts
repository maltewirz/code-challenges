export const twoOldestAges = (ages: number[]): number[] => {
    return ages.sort((a,b) => a - b).slice(-2)
}