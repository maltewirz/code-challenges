// https://www.codewars.com/kata/555eded1ad94b00403000071
export function SeriesSum(n: number): string {
    let result = 0;
    let divisor = 1.00;
    for (let i = 0; i < n; i++) {
        result += 1/divisor;
        divisor += 3;
    }
    return String(result.toFixed(2));
}