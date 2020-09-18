export const countSheep = (num: number): string => {
    let result : string = '';
    for (let i = 1; i <= num; i++) {
        result += i + ' sheep...';
    }
    return result;
}