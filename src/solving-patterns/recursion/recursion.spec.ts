import {
    factorial,
    collectOddValuesHelperMethod,
    collectOddValuesPureRecursion,
    power,
    productOfArray,
    recursiveRange,
    fib,
    reverse,
    isPalindrome,
    someRecursive,
    flatten,
    capitalizeFirst,
    nestedEvenSum,
    capitalizeWords,
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
    expect(productOfArray([1, 2, 3])).toStrictEqual(6);
    expect(productOfArray([1, 2, 3, 10])).toStrictEqual(60);
});

test('recursiveRange test', () => {
    expect(recursiveRange(6)).toStrictEqual(21);
    expect(recursiveRange(10)).toStrictEqual(55);
});

test('fib test', () => {
    expect(fib(4)).toStrictEqual(3);
    expect(fib(28)).toStrictEqual(317811);
});

test('reverse test', () => {
    expect(reverse('hel')).toStrictEqual('leh');
    expect(reverse('awesome')).toStrictEqual('emosewa');
    expect(reverse('rithmschool')).toStrictEqual('loohcsmhtir');
});

test('isPalindrome test', () => {
    expect(isPalindrome('tacocat')).toStrictEqual(true);
    expect(isPalindrome('foobar')).toStrictEqual(false);
});

test('someRecursive test', () => {
    const isOdd = (val: number) => val % 2 !== 0;
    expect(someRecursive([1, 2, 3, 4], isOdd)).toStrictEqual(true);
    expect(someRecursive([4, 6, 8], isOdd)).toStrictEqual(false);
});

test('flatten test', () => {
    // expect(flatten([1, 2, 3, [4, 5]])).toStrictEqual([1, 2, 3, 4, 5]);
    // expect(flatten([2, [4]])).toStrictEqual([2, 4]);
    expect(flatten([[1], [2], [3]])).toStrictEqual([1, 2, 3]);
});

test('capitalizeFirst test', () => {
    expect(capitalizeFirst(['car', 'taco', 'banana'])).toStrictEqual([
        'Car',
        'Taco',
        'Banana',
    ]);
});

test('nestedEvenSum test', () => {
    const obj1 = {
        outer: 2,
        obj: {
            inner: 2,
            otherObj: {
                superInner: 2,
                notANumber: true,
                alsoNotANumber: 'yup',
            },
        },
    };

    const obj2 = {
        a: 2,
        b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
        c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
        d: 1,
        e: { e: { e: 2 }, ee: 'car' },
    };

    expect(nestedEvenSum(obj1)).toStrictEqual(6);
    expect(nestedEvenSum(obj2)).toStrictEqual(10);
});

test('capitalizeWords test', () => {
    expect(
        capitalizeWords(['i', 'am', 'learning', 'recursion'])
    ).toStrictEqual(['I', 'AM', 'LEARNING', 'RECURSION']);
});
