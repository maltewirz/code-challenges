export function extraPerfect(n: number): number[] {
    let result : number[] = [];
    for (let i = 1; i <= n; i += 2 ) {
        result.push(i);
    }    
    return result;
}

// alternative solution
// export const extraPerfect = (n: number): number[] => 
// [...Array(n)].map((_, i) => i + 1).filter(n => n % 2);
