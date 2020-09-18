export const fakeBin = (x: string):string => {
    let result: string = '';
    for (let i = 0; i < x.length; i++) {
        parseInt(x[i]) >= 5 ? result += '1' : result += '0';
    }
    return result;
}