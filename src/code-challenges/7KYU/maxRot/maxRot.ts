// https://www.codewars.com/kata/56a4872cbb65f3a610000026
export function maxRot(n: number) {
    let arr = n.toString().split('');
    const length = arr.length;
    let results = [];
    for (let i = 0; i < length; i++) {
        // the results are pushed here to include the initial number
        results.push(Number(arr.join('')));
        // cut and paste the rotating number
        let cache = arr.splice(i, 1);
        arr.push(cache[0])
        cache = [];
    }
    return Math.max.apply(null, results);   
}