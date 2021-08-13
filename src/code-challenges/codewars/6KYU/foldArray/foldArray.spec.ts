import { foldArray } from './foldArray';

test('Basic test', () => {
    expect(foldArray([1,2,3,4,5],1)).toStrictEqual([6,6,3])
    expect(foldArray([6,6,3],1)).toStrictEqual([9,6])
    expect(foldArray([1,2,3,4,5],2)).toStrictEqual([9,6])
    expect(foldArray([3],1)).toStrictEqual([3])
    expect(foldArray([ -9, 9, -8, 8, 66, 23 ],1)).toStrictEqual([14, 75, 0])
});