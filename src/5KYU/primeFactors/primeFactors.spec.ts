import { primeFactors } from './primeFactors';

test('Basic Test', () => {
    expect(primeFactors(86240)).toStrictEqual('(2**5)(5)(7**2)(11)');
    // expect(primeFactors(100)).toStrictEqual('(2)(5**5)');
    // expect(primeFactors(7919)).toStrictEqual('(2**2)(3**3)(5)(7)(11**2)(17)');
    expect(primeFactors(7775460)).toStrictEqual('(2**2)(3**3)(5)(7)(11**2)(17)');

})


