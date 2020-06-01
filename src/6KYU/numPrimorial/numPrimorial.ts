export function numPrimorial(n: number) {
    const primeNumbers: number[] = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 
        43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 
        127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];
    
    let result: number = 1;
    for (let i = 0; i < n; i++) {
        result *= primeNumbers[i];
    }
    return result;
}


// alternative
// function isPrime(num: number) {
//     for(var i = 2; i < num; i++)
//       if(num % i === 0) return false;
//     return num > 1;
//   }
  
//   export function numPrimorial(n: number) {
//     let prime: number = 2;
//     let sum: number = 2;
//     for(var i = 1; i < n; i++){
//       prime++;
//       while(!isPrime(prime)){
//         prime++;
//       }
//       sum = sum * prime;
//     }
//     return sum;
//   }