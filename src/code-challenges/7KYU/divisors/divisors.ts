// https://www.codewars.com/kata/542c0f198e077084c0000c2e/

export function divisors(n: number): number {
    const results: number[] = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            results.push(i);
        }
    }
    return results.length;
}

