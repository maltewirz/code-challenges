import { sumZeroOn2, sumZeroOn, countUniquevalues } from './multiplePointers';

test('sumZero Test', () => {
    expect(sumZeroOn2([-3,-2,-1,0,1,2,3])).toStrictEqual([-3,3]);
    expect(sumZeroOn2([-2,0,1,3])).toStrictEqual(undefined);
    expect(sumZeroOn2([1,2,3])).toStrictEqual(undefined);
})

test('sumZeroOn Test', () => {
    expect(sumZeroOn([-3,-2,-1,0,1,2,3])).toStrictEqual([-3,3]);
    expect(sumZeroOn([-2,-1,0,1,2,3])).toStrictEqual([-2,2]);
    expect(sumZeroOn([-2,0,1,3])).toStrictEqual(undefined);
    expect(sumZeroOn([1,2,3])).toStrictEqual(undefined);
})

test('countUniquevalues Test', () => {
    expect(countUniquevalues([1,1,1,1,1,1,2])).toStrictEqual(2);
    expect(countUniquevalues([1,2,3,4,4,4,7,7,12,12,13])).toStrictEqual(7);
    expect(countUniquevalues([])).toStrictEqual(0);
    expect(countUniquevalues([-2,-1,-1,0,1])).toStrictEqual(4);
})