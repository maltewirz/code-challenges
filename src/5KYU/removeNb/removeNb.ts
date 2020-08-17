// https://www.codewars.com/kata/5547cc7dcad755e480000004/train/typescript

export function removeNb(n: number): number[][] {
    // replacing the for loop for something more efficient
    const sum = (n * (n+1))/2; 
    const number = [];

    for (let b = 0; b <= n; b++) {
        const a = (sum-b) / (b+1);        
        if (a < n && a % 1 === 0) {
            number.push([b,a])
        }
    }    
    return number
}