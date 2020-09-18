import { sqInRect } from './sqInRect';

test('Basic Test', () => {
    expect(sqInRect(5, 3)).toStrictEqual([3,2,1,1]);
})