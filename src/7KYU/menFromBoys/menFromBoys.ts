export function menFromBoys(arr: number[]) {
    arr = [...new Set(arr)]
    let even = arr.filter(elem => elem % 2 === 0);
    let odd = arr.filter(elem => elem % 2 !== 0);
    even.sort((a,b) => a - b);
    odd.sort((a,b) => b - a);
    return even.concat(odd);
}

//alternative
// let urr = [...new Set(arr)];
// return [
//   ...urr.filter(x => Math.abs(x%2) == 0).sort((a,b) => a - b),
//   ...urr.filter(x => Math.abs(x%2) == 1).sort((a,b) => b - a)
// ];