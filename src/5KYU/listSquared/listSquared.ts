// https://www.codewars.com/kata/55aa075506463dac6600010d/train/typescript

export function listSquared(m: number, n: number): number[][] {
    const resultArray: number[][] =[];
    
    for (let i = m; i <= n; i++) {
        
        const divisorArray: number[] = [];
        let divisorsSum = 0;

        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {                
                divisorArray.push(j);
            }
        }
        
        if (divisorArray.length > 0) {
            divisorsSum = divisorArray
                            .map(x => x* x)
                            .reduce((acc, curr) => acc + curr);
            
            if (Math.sqrt(divisorsSum) % 1 === 0) {                
                resultArray.push([i, divisorsSum]);
            }
        }

    }
    return resultArray;
}
