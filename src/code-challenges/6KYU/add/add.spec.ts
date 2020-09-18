import { add } from './add';

test('Basic test', () => {
    expect(add(1,2)).toStrictEqual(3);
    expect(add(-50, -176)).toStrictEqual(-226);
})