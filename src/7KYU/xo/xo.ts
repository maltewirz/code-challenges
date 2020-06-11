// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/typescript

export function xo(str: string): boolean {
    const xLength = str.split('').filter(word => word.toLowerCase() === 'x').length
    const oLength = str.split('').filter(word => word.toLowerCase() === 'o').length
    return  xLength === oLength;
}