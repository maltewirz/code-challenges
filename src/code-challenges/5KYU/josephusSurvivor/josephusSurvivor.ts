// https://www.codewars.com/kata/555624b601231dc7a400017a/

export function josephusSurvivor(n: number, k: number): number {
    const arr: number[] = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }    

    let indexCounter = (k - 1) % arr.length    
    for (let i = arr.length; i > 1; i--) {                
        arr.splice(indexCounter,1);
        indexCounter = (indexCounter + k - 1) % arr.length
    }
    
    return arr[0];
}

// alternative
// export function josephusSurvivor(n: number, k: number): number {
//     return n === 1 ? 1 : (josephusSurvivor(n - 1, k) + k - 1) % n + 1;
//   }