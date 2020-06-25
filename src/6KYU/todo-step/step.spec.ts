import { step } from './step';

test('Basic test', () => {
    // expect(step(2,100,110)).toStrictEqual([101, 103]);
    expect(step(2,2,50)).toStrictEqual([3, 5]);
})