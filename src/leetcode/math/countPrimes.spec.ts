import { countPrimes } from './countPrimes';


test('Basic Test', () => {
    expect(countPrimes(10)).toStrictEqual(4)
})