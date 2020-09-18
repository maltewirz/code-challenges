export const automorphic = (n: number): string => {
    const lengthN: number = String(n).length;
    const squared: number = Math.pow(n, 2)
    const cutSquared: number = Number(String(squared).slice(-lengthN))
    return cutSquared === n ? 'Automorphic' : 'Not!!';
}

//alternative
// export function automorphic(n: number) {
//     return String(n) === String(n ** 2).slice(-String(n).length)
//         ? 'Automorphic'
//         : 'Not!!';
// }