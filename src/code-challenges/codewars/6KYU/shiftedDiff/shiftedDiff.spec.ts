import { shiftedDiff } from './shiftedDiff';

test('Basic Test', () => {
    expect(shiftedDiff('coffee', 'eecoff')).toStrictEqual(2);
});
