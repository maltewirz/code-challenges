import {
    factorial,
    collectOddValuesHelperMethod,
    collectOddValuesPureRecursion,
    power,
    productOfArray,
    recursiveRange,
    fib,
} from './recursion';

test('factorial test', () => {
    expect(factorial(3)).toStrictEqual(6);
    expect(factorial(5)).toStrictEqual(120);
});

test('collectOddValuesHelperMethod test', () => {
    expect(
        collectOddValuesHelperMethod([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
    ).toStrictEqual([1, 3, 5, 7, 9]);
});

test('collectOddValuesPureRecursion test', () => {
    expect(
        collectOddValuesPureRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
    ).toStrictEqual([1, 3, 5, 7, 9]);
});

test('power test', () => {
    expect(power(2, 2)).toStrictEqual(4);
    expect(power(2, 4)).toStrictEqual(16);
});

test('productOfArray test', () => {
    expect(productOfArray([1,2,3])).toStrictEqual(6);
    expect(productOfArray([1,2,3,10])).toStrictEqual(60);
});

test('recursiveRange test', () => {
    expect(recursiveRange(6)).toStrictEqual(21);
    expect(recursiveRange(10)).toStrictEqual(55);
});

test('fib test', () => {
    expect(fib(4)).toStrictEqual(3);
    expect(fib(28)).toStrictEqual(317811);
});