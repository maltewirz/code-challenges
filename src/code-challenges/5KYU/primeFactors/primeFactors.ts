// https://www.codewars.com/kata/54d512e62a5e54c96200019e/train/typescript


let factorArr: number[] = [];
export function primeFactors(n: number): string {
    trialDivision(n); // recursive call
    const resultFactorArr = factorArr 
    factorArr = []
    return primerExponentConverter(resultFactorArr);
}

export function trialDivision(n: number): string | void {
        for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            factorArr.push(i)
            trialDivision(n/ i)
            return '';
        }
    }
}

export function primerExponentConverter(factorArr: number[]): string {
    let factorExponents = '';
    let counter = 1;
    for (let i = 0; i < factorArr.length; i++) {
        if (factorArr[i] !== factorArr[i+1]) {
            if (counter > 1) {
                factorExponents += `(${factorArr[i]}**${counter})`;
                counter = 1;
            } else {
                factorExponents += `(${factorArr[i]})`;
            }
        } else {
            counter++;
        }   
    }
    return factorExponents;
}

// alternative
// export class G964 {
//     public static primeFactors = (n) => {
//       let primes = {}
//       for (let i = 2; i <= n; i++) {
//         while(n % i === 0) {
//           if (i in primes) primes[i]++;
//           else primes[i] = 1;
//           n /= i;
//         }
//       }
//       return Object.keys(primes)
//         .map(prime => primes[prime] === 1 ? `(${prime})` : `(${prime}**${primes[prime]})`)
//         .join('');
//     }
//   }