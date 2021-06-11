import { countPrimes, countPrimesAlgo } from './countPrimes';

test('Basic Test', () => {
    expect(countPrimes(10)).toStrictEqual(4);
    expect(countPrimesAlgo(10)).toStrictEqual(4);
});
