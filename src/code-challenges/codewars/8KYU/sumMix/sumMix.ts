export const sumMix = (x: any[]): number => {
    return x.reduce((acc, curr) => parseInt(acc) + parseInt(curr));
}