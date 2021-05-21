import { climbStairs, climbStairsIterative} from './climbStairs';

test('Basic Test', () => {
    expect(climbStairs(2)).toStrictEqual(2);
    expect(climbStairs(3)).toStrictEqual(3);
    expect(climbStairsIterative(2)).toStrictEqual(2);
    expect(climbStairsIterative(3)).toStrictEqual(3);
})