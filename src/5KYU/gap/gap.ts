// https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4/train/typescript

export function gap(gap: number, start: number, end: number): number[] | null {
    const primes = [];
    for (let i = start; i <= end; i++) {
        let prime = true
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            primes.push(i)
        }
    }

    for (let i = 0; i < primes.length; i++) {
        if ((primes[i+1] - primes[i]) === gap) {
            return [primes[i], primes[i+1]];
        }
    }
    
    return null;
}

// alternative - faster

// function isPrim(x: number) {
// 	if (x === 2) return true; // as @Graipher commented
// 	if (x % 2 !== 0) {
// 		// you only need to check to the half of x
// 		for (let i = 2; i <= x / 2; i++) {
// 			if (x % i === 0) {
// 				return false;
// 			}
// 		}
// 		return true;
// 	}
// 	return false;
// }

// export function gap(gap: number, start: number, end: number): number[] | null {
// 	let lastPrim = null || 0; 
// 	for (let i = start; i < end; i++) {
// 		if (isPrim(i)) {
// 			if (i - lastPrim === gap) {
// 				return [lastPrim, i];
// 			}  else {
// 				lastPrim = i;
// 			}
// 		}
// 	}
// 	return null;
// }