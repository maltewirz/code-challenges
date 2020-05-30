import { nthSmallest } from './nthSmallest';

test('Basic test', () => {
    // expect(nthSmallest([3, 1, 2], 2)).toStrictEqual(2);
    expect(nthSmallest([15, 20, 7, 10, 4, 3], 3)).toStrictEqual(7);
    
})