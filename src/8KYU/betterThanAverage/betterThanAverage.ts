export const betterThanAverage = (classPoints: number[], yourPoints: number): boolean => {
    const avg = classPoints.reduce((acc, curr) => acc +curr) / classPoints.length;
    return avg < yourPoints
}